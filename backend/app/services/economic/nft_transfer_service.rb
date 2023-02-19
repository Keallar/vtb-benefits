module Economic
  class NftTransferService
    def initialize(sender, receiver, notification)
      @sender = sender
      @receiver = receiver
      @notification = notification

      @client = Faraday.new(ENV['BLOCKCHAIN_URL'])
    end

    def transfer!
      [:in, :out].each do |transaction_direction|
        @client.post('/v1/transfers/nft') do |req|
          req[:params] = @notification.payload[transaction_direction]
        end

        collection = NftCollection.transfer(
          @notification.payload[transaction_direction], 
          transaction_direction == :in ? @notification.receiver : @notification.sender
        )
      end
    end
  end
end

