class CreateUserAttendances < ActiveRecord::Migration[5.2]
  def change
    create_table :user_attendances do |t|

      t.timestamps
    end
  end
end
