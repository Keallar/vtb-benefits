module Api
  module V1
    class NotificationsApi < Api::V1::Base
      format :json

      resource :notifications do
        before { check_authorized! }

        get do
          result = Notification.where(receiver_id: current_user.id, completed: false, rejected: false)

          present result, with: Entities::Notification
        end

        params do
          requires :receiver_id, type: Integer
          requires :notification_type, type: String
          requires :sender_token_id, type: Integer
          requires :receiver_token_id, type: Integer
        end
        post do
          notification = Notification.create!(
            sender_id: current_user.id,
            receiver_id: params[:receiver_id],
            notification_type: params[:notification_type],
            completed: false,
            rejected: false
          )
          
          notification.fill_change_attrs(params) if params[:notification_type] == 'change'


          status 201
        end

        route_param :id, type: Integer do
          post 'complete' do
            Notification.find(params[:id]).complete!

            status 201
          end

          delete 'reject' do
            Notification.find(params[:id]).reject!

            status 204
          end
        end
      end
    end
  end
end

