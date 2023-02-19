class CreateUserDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :user_deals do |t|
      t.belongs_to :user
      t.belongs_to :deal
      t.timestamps
    end
  end
end
