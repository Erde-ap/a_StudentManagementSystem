class RemoveAttendanceClumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :Attendances, :day, :integer
  end
end
