class ChangeColumnToReqests2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :requests, :state, :apply_state
    change_column :requests, :req_date, :string, null: false
  end
end
