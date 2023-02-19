module Api
  module Entities
    class Notification < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :receiver, documentation: { type: Api::Entities::User } do |n, _|
        ::User.find(n.receiver_id)
      end
      expose :sender, documentation: { type: Api::Entities::User } do |n, _|
        ::User.find(n.sender_id)
      end
      expose :notification_type, documentation: { type: String }
    end
  end
end
