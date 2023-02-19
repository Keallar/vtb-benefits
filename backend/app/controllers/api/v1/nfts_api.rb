module Api
  module V1
    class NftsApi < Api::V1::Base
      format :json

      resource :nfts do
        before { check_authorized! }

        params do
          requires :file, type: File
          optional :collection_id
        end
        post do
          NftGenerationService.new(current_user, params[:file], params[:collection_id]&.to_i).generate!
        end

        params do
          optional :user_id, type: Integer
        end
        get do
          result = NftCollection.for_user(params[:user_id])

          present result, with: Api::Entities::NftCollection
        end

        route_param :collection_id, type: Integer do
          get do
            result = NftCollection.find(params[:collection_id]).nfts

            present result, with: Api::Entities::Nft
          end
        end
      end
    end
  end
end

