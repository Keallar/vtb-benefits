module Api
  module Entities
    class User < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор' }
      expose :email, documentation: { type: String }
      expose :sex, documentation: { type: String }
      expose :first_name, documentation: { type: String }
      expose :second_name, documentation: { type: String }
      expose :last_name, documentation: { type: String }
      expose :username, documentation: { type: String }
      expose :role, documentation: { type: Integer }
      expose :official, documentation: { type: String }
      expose :all_coins, documentation: { type: Integer }
      expose :current_coins, documentation: { type: Integer }
      expose :birthday, documentation: { type: DateTime }, format_with: :timestamp
      expose :date_of_deployment, documentation: { type: DateTime }, format_with: :timestamp
      expose :public_key, documentation: { type: String }
      expose :level, documentation: { type: Integer }
      expose :tags, documentation: { type: Array } do |user, _|
        ::Tag.where(id: user.tags.pluck(:id))
      end
      expose :events, documentation: { type: Array } do |user, _|
        ::Event.where(id: user.events.pluck(:id))
      end
      expose :deals, documentation: { type: Array } do |user, _|
        ::Deal.where(id: user.deals.pluck(:id))
      end
    end
  end
end
