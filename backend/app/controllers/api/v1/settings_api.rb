module Api
  module V1
    class SettingsApi < Api::V1::Base
      resources :settings do
        before { check_authorized! }

        desc 'Список настроек'
        get do
          result = Setting.all
          present result, with: Entities::Setting
        end

        post do
          begin
            setting = Setting.create(params)
          rescue => e
            Rails.logger.error e.message
            Rails.logger.error e.backtrace
          end
          present setting, with: Entities::Setting
        end
      end
    end
  end
end
