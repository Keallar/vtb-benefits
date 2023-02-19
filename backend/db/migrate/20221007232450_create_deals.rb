class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.integer :amount
      t.integer :transaction_type
      t.timestamps
    end
  end
end
