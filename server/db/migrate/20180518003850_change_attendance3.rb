class ChangeAttendance3 < ActiveRecord::Migration[5.2]
  def change
    rename_column :attendances, :yyyy_mm_dd_hh, :yyyy_mm_dd_hh_mm
  end
end
