class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.string :yyyy_mm_dd, index: true, foreign_key: true, null:false
      t.integer :period1, default: 1, null: false
      t.integer :period2, default: 1, null: false
      t.integer :period3, default: 1, null: false
      t.integer :period4, default: 1, null: false
      t.integer :period5, default: 1, null: false
      t.timestamps
    end
  end
end
