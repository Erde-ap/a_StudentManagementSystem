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

ActiveRecord::Schema.define(version: 2018_06_04_015422) do

  create_table "attendances", force: :cascade do |t|
    t.integer "student_id"
    t.integer "period1", default: 8, null: false
    t.integer "period2", default: 8, null: false
    t.integer "period3", default: 8, null: false
    t.integer "period4", default: 8, null: false
    t.integer "period5", default: 8, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "year"
    t.integer "month"
    t.integer "day"
    t.string "yyyy_mm_dd_hh_mm"
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
    t.integer "req_period1"
    t.integer "req_period2"
    t.integer "req_period3"
    t.integer "req_period4"
    t.integer "req_period5"
    t.string "apply_date"
    t.boolean "approval_state"
    t.string "student_name"
    t.integer "before_state"
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

  create_table "user_attendances", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "attendance_id", null: false
    t.string "name"
    t.integer "grade"
    t.integer "classes"
    t.integer "permission"
    t.boolean "state", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  create_table "views", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_views_on_email", unique: true
    t.index ["reset_password_token"], name: "index_views_on_reset_password_token", unique: true
  end

end
