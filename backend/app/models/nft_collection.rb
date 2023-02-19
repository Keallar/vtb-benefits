class NftCollection < ApplicationRecord
  belongs_to :user
  has_many :nfts

  def self.transfer(token_id, user)
    collection = Nft.find_by_token_id(token_id).nft_collection

    if collection.nfts.size = 1
      collection.update!(user: user)
    else
      NftCollection.create!(
        title: collection.title,
        url: collection.url,
        user: user
      )
    end
  end

  def self.for_user(user_id)
    return all unless user_id

    where(user_id: user_id)
  end
end
