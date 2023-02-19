module Api
  module V1
    class EventsApi < Api::V1::Base
      format :json

      resources :events do
        before { check_authorized! }

        get do
          result = Event.all
          present result, with: Api::Entities::Event
        end

        post do
          begin
            event = Event.create(params)
          rescue => e
            Rails.logger.error e.message
            Rails.logger.error e.backtrace
          end
          present event, with: Entities::Event
        end

        route_param :id, type: Integer do
          get do
            event = Event.find(params[:id])
            present event, with: Entities::Event
          end

          patch '/publish' do
            event = Event.find(params[:id])
            event.update_attribute(:publish, true)
            present event, with: Entities::Event
          end
        end
      end
    end
  end
end

