module Api
  module Entities
    class Feed < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :title, documentation: { type: String }
      expose :tread, documentation: { type: String }
      expose :creator_id, as: :user_id, documentation: { type: Integer }
      expose :created_at, documentation: { type: DateTime }, format_with: :timestamp
      expose :image_url, documentation: { type: String }
    end
  end
end
