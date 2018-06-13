class ChangenameToUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :password, :string
    add_column :users, :password_digest, :string
    add_column :requests, :before_state, :integer
    add_column :requests, :period_start, :integer
    add_column :requests, :period_end, :integer
  end
end
