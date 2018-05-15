class ChangeColumnTouser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :student_id, :integer, null: false
    change_column :users, :attendance_id, :integer, null: false
    change_column :users, :password, :string, null: false
    change_column :users, :state, :boolean, null: false, default: false
  end
end
