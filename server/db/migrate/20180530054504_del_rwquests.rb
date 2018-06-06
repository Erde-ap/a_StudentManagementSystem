class DelRwquests < ActiveRecord::Migration[5.2]
  def change
    remove_column :requests, :student_id_id, :integer
  end
end
