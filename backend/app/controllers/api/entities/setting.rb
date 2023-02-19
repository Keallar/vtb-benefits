module Api
  module Entities
    class Setting < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :max_coins_award, documentation: { type: Integer }
      expose :low_event_award_spread, documentation: { type: Integer }
      expose :high_event_award_spread, documentation: { type: Integer }
      expose :total_coins, documentation: { type: Integer }
    end
  end
end

