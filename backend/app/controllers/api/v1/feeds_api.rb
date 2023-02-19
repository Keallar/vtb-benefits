module Api
  module V1
    class FeedsApi < Api::V1::Base
      format :json

      resource :feeds do
        before { check_authorized! }

        desc 'Список новостей', success: Entities::Feed
        get do
          result = Feed.all

          present result, with: Entities::Feed
        end

        desc 'Создание новости', success: Entities::Feed
        params do
          requires :title, type: String, allow_blank: false
          requires :tread, type: String, allow_blank: false
          requires :created_at, type: DateTime, allow_blank: false
          requires :user_id, type: Integer, allow_blank: false
        end
        post do
          begin
            feed = Feed.create(params)
          rescue => e
            Rails.logger.error e.message
            Rails.logger.error e.backtrace
          end
          present feed, with: Entities::Feed
        end

        route_param :id, type: Integer do
          desc 'Посмотреть Новость', success: Entities::Feed
          params do
            requires :title, type: String, allow_blank: false
            requires :tread, type: String, allow_blank: false
            requires :created_at, type: DateTime, allow_blank: false
            requires :image_url, type: String
          end
          get do
            result = Feed.find(params[:id])
            present result, with: Entities::Feed
          end

          desc 'Редактирование новости', success: Entities::Feed
          patch do
            feed = Feed.find(params[:id])
            feed.update!(declared(params))
            present feed, with: Entities::Feed
          end

          desc 'Удаление новости', success: Entities::Feed
          delete do
            Feed.find(params[:id]).destroy
            status :no_content
          end
        end
      end
    end
  end
end


