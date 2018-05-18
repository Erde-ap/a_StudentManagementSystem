class ChangeToAttendance5 < ActiveRecord::Migration[5.2]
  def change
    remove_column :attendances, :yyyy_mm_dd_hh_mm, :strong
    add_column :attendances, :day, :integer
  end
end
