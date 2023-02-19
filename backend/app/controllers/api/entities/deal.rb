module Api
  module Entities
    class Deal < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :amount, documentation: { type: Integer, desc: '' }
      expose :transaction_type, documentation: { type: Integer, desc: 'Тип транзакции' }
      expose :transaction_action, documentation: { type: Integer, desc: 'Действие' }
      expose :created_at, documentation: { type: DateTime, desc: 'Дата создания' }, format_with: :timestamp
      expose :updated_at, documentation: { type: DateTime, desc: 'Дата обновления' }, format_with: :timestamp
      expose :users, documentation: { type: Array } do |deal, _|
        ::User.where(id: deal.users.pluck(:id))
      end
    end
  end
end

