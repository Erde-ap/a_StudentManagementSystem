class Requests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
    t.integer :student_id
    t.integer :req_year
    t.integer :req_month
    t.integer :req_day
    t.integer :req_time
    t.integer :type
    t.string :reason
    t.date :req_date

    t.boolean :state
    end
  end
end
