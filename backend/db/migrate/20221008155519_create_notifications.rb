class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.references :sender
      t.references :receiver
      t.integer :notification_type
      t.string :message
      t.json :payload, default: {}
      t.boolean :completed
      t.boolean :rejected

      t.timestamps
    end
  end
end
