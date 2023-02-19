module Api
  module V1
    class DealsApi < Api::V1::Base
      format :json

      resource :deals do
        before { check_authorized! }

        desc 'Список транзакций', success: Entities::Deal
        get do
          result = Deal.all
          present result, with: Entities::Deal
        end

        desc 'Создание транзакции', success: Entities::Deal
        params do
          requires :amount, type: Integer, allow_blank: false
        end
        post do
          begin
            deal = Deal.create(params)
            UserDeal.create!(user: current_user, deal: deal)
          rescue => e
            Rails.logger.error e.message
            Rails.logger.error e.backtrace
          end

          present deal, with: Entities::Deal
        end

        route_param :id, type: Integer do
          get do
            deal = Deal.find(params[:id])
            present deal, with: Entities::Deal
          end
        end
      end
    end
  end
end
