class AddColumnImageUrlToFeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :feeds, :image_url, :string
  end
end
