class CreateNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :nfts do |t|
      t.string :title
      t.references :nft_collection
      t.integer :token_id

      t.timestamps
    end
  end
end
