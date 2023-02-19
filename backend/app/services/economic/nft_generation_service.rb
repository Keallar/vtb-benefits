module Economic
  class NftGenerationService
    def initialize(user, image, collection_id = nil)
      @user = user
      @image = image
      @collection_id = collection_id

      @client = Faraday.new(ENV['BLOCKCHAIN_URL'])
    end

    def generate!
      resp = @client.post('/v1/nft/generate') do |req|
        req.body = {
          toPublicKey: @user.public_key,
          uri: store_file!,
          nftCount: 1
        }.to_json
      end

      t_nft_resp = @client.get("/v1/nft/generate/#{resp.body['transaction_hash']}").body

      new_col = NftCollection.create!(user: @user) unless @collection_id

      # Мы создали только один токен в рамках транзакции, поэтому он всегда превый
      nft = Nft.new(token_id: t_nft_resp['tokens'].first)
      nft.nft_collection_id = new_col.id
      nft.save

      @uri
    end

    private

    def store_file!
      return @image if ENV['SKIP_STORAGE'] == 'true'
      @uri = "#{ENV['STORAGE_PATH']}/#{SecureRandom.uuid}/#{File.basename(@image)}"

      file = File.new(uri)
      file.write @image.read

      file.close

      uri
    end
  end
end
