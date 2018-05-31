class AddRequest1 < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :apply_date, :string
    add_column :requests, :approval_state, :boolean
    add_column :requests, :student_name, :string
  end
end
