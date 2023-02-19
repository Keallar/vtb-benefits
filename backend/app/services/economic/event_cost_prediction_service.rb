module Economic
  class EventCostPredictionSerivce
    def initialize(event_id, tag_id)
      @users = Tag.find(tag_id).users
      @event = Event.find(event_id)
    end

    def call
      ln = Economic::LinearRegressionService.new

      real = @users.pluck(:current_coins)
      spread = @event.work? ? (1.05..1.1) : (1.0..1.05)
      need = real.map { |v| v * rand(spread) }

      ln.fit(real, need)

      predicted_raises = real.map do |real_user_coins|
        ln.predict(real_user_coins)
      end

      avg_real = real.inject{ |sum, el| sum + el }.to_f / real.size
      avg_raise = predicted_raises.inject{ |sum, el| sum + el }.to_f / predicted_raises.size

      ln.predict(avg_raise) - avg_real
    end
  end
end
