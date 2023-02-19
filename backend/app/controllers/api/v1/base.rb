module Api
  module V1
    class Base < Grape::API
      use GrapeLogging::Middleware::RequestLogger,
          instrumentation_key: 'grape_base_logs',
          formatter: GrapeLogging::Formatters::Default.new,
          include: [
            GrapeLogging::Loggers::Response.new,
            GrapeLogging::Loggers::FilterParameters.new
          ]

      helpers ::AuthHelper
      helpers ::ApiHelper

      version 'v1', using: :path
      format :json

      mount Api::V1::UsersApi
      mount Api::V1::EventsApi
      mount Api::V1::TagsApi
      mount Api::V1::RequestsApi
      mount Api::V1::FeedsApi
      mount Api::V1::DealsApi
      mount Api::V1::SettingsApi
      mount Api::V1::NotificationsApi
      mount Api::V1::NftsApi
    end
  end
end
