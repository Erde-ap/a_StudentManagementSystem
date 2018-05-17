class ChangeUser3 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :student_id, :integer
  end
end
