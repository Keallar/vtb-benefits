class CreateSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :settings do |t|
      t.integer :max_coins_award
      t.integer :low_event_award_spread
      t.integer :high_event_award_spread
      t.integer :total_coins

      t.timestamps
    end
  end
end
