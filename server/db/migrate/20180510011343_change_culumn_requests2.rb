class ChangeCulumnRequests2 < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :req_period1, :integer
    add_column :requests, :req_period2, :integer
    add_column :requests, :req_period3, :integer
    add_column :requests, :req_period4, :integer
    add_column :requests, :req_period5, :integer
    remove_column :requests, :req_time, :integer
  end
end
