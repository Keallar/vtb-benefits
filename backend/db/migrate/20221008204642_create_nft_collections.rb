class CreateNftCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :nft_collections do |t|
      t.string :title
      t.string :url
      t.references :user

      t.timestamps
    end
  end
end
