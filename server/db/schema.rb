# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_10_013357) do

  create_table "attendances", force: :cascade do |t|
    t.integer "student_id"
    t.string "yyyy_mm_dd_hh"
    t.integer "period1", default: 2, null: false
    t.integer "period2", default: 2, null: false
    t.integer "period3", default: 2, null: false
    t.integer "period4", default: 2, null: false
    t.integer "period5", default: 2, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_attendances_on_student_id"
  end

  create_table "requests", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "req_year", null: false
    t.integer "req_month", null: false
    t.integer "req_day", null: false
    t.integer "req_type", null: false
    t.string "reason"
    t.string "req_date", null: false
    t.boolean "apply_state", default: false, null: false
    t.integer "student_id_id"
    t.integer "req_period1"
    t.integer "req_period2"
    t.integer "req_period3"
    t.integer "req_period4"
    t.integer "req_period5"
    t.index ["student_id_id"], name: "index_requests_on_student_id_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.string "yyyy_mm_dd", null: false
    t.integer "period1", default: 1, null: false
    t.integer "period2", default: 1, null: false
    t.integer "period3", default: 1, null: false
    t.integer "period4", default: 1, null: false
    t.integer "period5", default: 1, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["yyyy_mm_dd"], name: "index_schedules_on_yyyy_mm_dd"
  end

  create_table "users", id: false, force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "INTEGER PRIMARY KEY AUTO_INCREMENT"
    t.integer "attendance_id", null: false
    t.string "password", null: false
    t.string "name"
    t.integer "grade"
    t.integer "classes"
    t.integer "permission"
    t.boolean "state", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
