module ApiHelper
  extend Grape::API::Helpers

  Grape::Entity.format_with :timestamp do |date|
    date.strftime('%d/%m/%Y %H:%M')
  end
end
