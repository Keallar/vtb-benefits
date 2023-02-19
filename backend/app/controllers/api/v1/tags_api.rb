module Api
  module V1
    class TagsApi < Api::V1::Base
      format :json

      resource :tags do
        before { check_authorized! }

        desc 'Список тегов', success: Entities::Tag
        get do
          result = Tag.all

          present result, with: Entities::Tag
        end

        desc 'Создание тегов'
        params do
          requires :title, type: String, allow_blank: false
        end
        post do
          begin
            tag = Tag.create(params)
            UserTag.create!(user: current_user, tag: tag)
          rescue => e
            Rails.logger.error e.message
            Rails.logger.error e.backtrace
          end

          present tag, with: Entities::Tag
        end

        route_param :id, type: Integer do
          desc 'Просмотр тега'
          get do
            tag = Tag.find(params[:id])
            present tag, with: Entities::Tag
          end

          desc 'Изменение тега'
          params do

          end
          patch do
            tag = Tag.find(params[:id])
            tag.update!(declared(params))
            present tag, with: Entities::Tag
          end

          desc 'Удаление тега'
          delete do
            Tag.find(params[:id]).destroy
            status :no_content
          end
        end
      end
    end
  end
end

