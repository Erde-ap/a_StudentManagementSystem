class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :student_id, 'INTEGER PRIMARY KEY AUTO_INCREMENT'
      t.integer :attendance_id
      t.string :password
      t.string :name
      t.integer :grade
      t.integer :classes
      t.integer :permission
      t.boolean :state

      t.timestamps
    end
  end
end
