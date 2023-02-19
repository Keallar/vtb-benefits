module Economic
  class NftTransferService
    def initialize(notification)
      @notification = notification

      @client = Faraday.new(ENV['BLOCKCHAIN_URL'])
    end

    def transfer!
      @client.post('/v1/transfers/nft') do |req|
        req[:params] = @notification.payload
      end
    end
  end
end

