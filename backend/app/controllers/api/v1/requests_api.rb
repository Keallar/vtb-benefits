module Api
  module V1
    class RequestsApi < Api::V1::Base
      format :json

      resource :requests do
        before { check_authorized! }

        desc 'Список заявок', success: Entities::Request
        get do
          result = Request.all

          present result, with: Entities::Request
        end

        desc 'Создание заявки'
        params do
          requires :title, type: String, allow_blank: false
          requires :description, type: String, allow_blank: false
          requires :user_id, type: Integer, allow_blank: false
          requires :cost, type: Integer, allow_blank: false
          requires :request_type, type: Integer, allow_blank: false
          optional :tags, type: Array[Integer]
        end
        post do
          begin
            result = Request.create(params)
          rescue => e
            Rails.logger.error e.message
            Rails.logger.error e.backtrace
          end

          present result, with: Entities::Request
        end

        route_param :id, type: Integer do
          desc 'Просмотр заявки'
          params do
          end
          get do
            result = Request.find(params[:id])

            present result, with: Entities::Request
          end

          desc 'Изменение заявки'
          params do
            requires :title, type: String, allow_blank: false
            requires :description, type: String, allow_blank: false
          end
          patch do
            declared_params = declare(params)
            result = Request.find(params[:id]).update(declared_params)

            present result, with: Entities::Request
          end

          desc 'Удаление заявки'
          delete do
            Request.find(params[:id]).destroy
            status :no_content
          end

          params do
            requires :approved, type: Grape::API::Boolean
          end
          patch '/accept' do
            request = Request.find(params[:id]).update(params)
            # status 201
          end

          params do
            requires :rejected, type: Grape::API::Boolean
          end
          patch '/reject' do

          end
        end
      end
    end
  end
end

