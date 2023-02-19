module Api
  module Entities
    class NftCollection < Api::Entities::Base
      expose :id, documentation: { type: Integer, desc: 'Идентификатор', required: true }
      expose :title, documentation: { type: String, desc: 'Название', required: true }
      expose :url, documentation: { type: String }
      expose :user_id

      expose :nfts, using: Api::Entities::Nft
    end
  end
end
