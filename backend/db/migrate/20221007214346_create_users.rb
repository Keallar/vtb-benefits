class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :sex
      t.string :first_name
      t.string :last_name
      t.string :second_name
      t.string :username
      t.string :role
      t.string :official
      t.integer :current_coins
      t.bigint :all_coins
      t.datetime :birthday
      t.datetime :date_of_deployment
      t.string :public_key
      t.string :private_key
      t.timestamps
    end
  end
end
