class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :title
      t.text :description
      t.integer :request_type, default: 0
      t.boolean :approved
      t.boolean :rejected
      t.integer :cost
      t.integer :user_id
      t.timestamps
    end
  end
end
