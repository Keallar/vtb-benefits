module Api
  module Entities
    class Request < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :title, documentation: { type: String, desc: 'Название' }
      expose :description, documentation: { type: String, desc: 'Описание'}
      expose :request_type, documentation: { type: Integer, desc: 'Тип запроса' }
      expose :approved, documentation: { type: Grape::API::Boolean, desc: 'Подтверждение' }
      expose :rejected, documentation: { type: Grape::API::Boolean, desc: 'Отказ' }
      expose :cost, documentation: { type: Integer, desc: 'Стоимость' }
      expose :user_id, documentation: { type: Integer, desc: 'Идентификатор Пользователя' }
      expose :created_at, documentation: { type: DateTime, desc: 'Дата создания' }, format_with: :timestamp
      expose :tags, documentation: { type: Array, desc: 'Теги' } do |request, _|
        ::Tag.where(id: request.tags.pluck(:id))
      end
    end
  end
end
