class ChangeToAttendance6 < ActiveRecord::Migration[5.2]
  def change
    add_column :attendances, :yyyy_mm_dd_hh_mm, :string
  end
end
