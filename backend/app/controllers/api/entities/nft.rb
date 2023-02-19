module Api
  module Entities
    class NftCollection < Api::Entities::Base
      expose :title, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :token_id, documentation: { type: String, desc: 'Идентификатор токена', required: true }
    end
  end
end
