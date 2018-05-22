class ChangeAttendances7 < ActiveRecord::Migration[5.2]
  def change
    change_column :attendances, :period1, :integer, null: false, default: 9
    change_column :attendances, :period2, :integer, null: false, default: 9
    change_column :attendances, :period3, :integer, null: false, default: 9
    change_column :attendances, :period4, :integer, null: false, default: 9
    change_column :attendances, :period5, :integer, null: false, default: 9
  end
end
