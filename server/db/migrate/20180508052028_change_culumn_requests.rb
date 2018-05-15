class ChangeCulumnRequests < ActiveRecord::Migration[5.2]
  def change
    rename_column :requests, :type, :req_type
  end
end
