module Api
  module Entities
    class Event < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :title, documentation: { type: String, desc: 'Название', required: true }
      expose :description, documentation: { type: String, desc: 'Описание', required: true }
      expose :start_date, documentation: { type: DateTime, desc: 'Дата начала', required: true }, format_with: :timestamp
      expose :end_date, documentation: { type: DateTime, desc: 'Дата конца', required: true }, format_with: :timestamp
      expose :event_type, documentation: { type: Integer, desc: 'Тип ивента', required: true }
      expose :created_at, documentation: { type: DateTime, desc: 'Дата создания' }, format_with: :timestamp
      expose :users, documentation: { type: Array } do |event, _|
        ::User.where(id: event.users.pluck(:id))
      end
    end
  end
end
