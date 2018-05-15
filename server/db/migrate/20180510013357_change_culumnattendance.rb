class ChangeCulumnattendance < ActiveRecord::Migration[5.2]
  def change
    change_column :attendances, :period1, :integer, null: false, default: 2
    change_column :attendances, :period2, :integer, null: false, default: 2
    change_column :attendances, :period3, :integer, null: false, default: 2
    change_column :attendances, :period4, :integer, null: false, default: 2
    change_column :attendances, :period5, :integer, null: false, default: 2


  end
end
