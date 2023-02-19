class AddTagIdToRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :request_tags do |t|
      t.belongs_to :request
      t.belongs_to :tag
      t.timestamps
    end
  end
end
