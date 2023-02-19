require 'grape-swagger'

module Api
  class Base < Grape::API
    mount Api::V1::Base
    add_swagger_documentation \
       :api_version => 'v1',
       :base_path => '/api',
       hide_documentation_path: true,
       hide_format: true,
       mount_path: '/api/v1/swagger_doc'
  end
end
