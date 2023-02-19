module Api
  module Entities
    class Tag < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :title, documentation: { type: String, desc: 'Название' }
      expose :users, documentation: { type: Array, desc: 'Список пользователей' } do |tag, _|
        ::User.where(id: tag.users.pluck(:id))
      end
    end
  end
end
