class ChangeColumnToReqests < ActiveRecord::Migration[5.2]
  def change
    change_column :requests, :student_id, :integer, null: false
    change_column :requests, :req_year, :integer, null: false
    change_column :requests, :req_month, :integer, null: false
    change_column :requests, :req_day, :integer, null: false
    change_column :requests, :req_time, :integer, null: false
    change_column :requests, :type, :integer, null: false
    change_column :requests, :state, :boolean, null: false, default: false
  end
end