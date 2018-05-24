#0：出席　１：遅刻　2：欠席　3：就活　4：病欠　5：公欠 6:初期値
#15分遅れで遅刻
#period1～5の初期値は6

require_relative '../config/boot'
require_relative '../config/environment'

require 'csv'
require 'clockwork'
require 'fileutils'
require "time"
include Clockwork

csv1 = 0
csv2 = 0
date = ""
number = 1

every(1.second, 'period1.job') do
   CSV.foreach("/home/jaguar/Student.csv", headers: true) do |row|
      #ファイル更新時間更新
      file = File::stat("/home/jaguar/Student.csv")
      csv2 = file.mtime
      
      #ファイル更新確認
      if csv2 > csv1 || csv1 == 0
            csv1 = csv2
            attendance = Attendance.find_by(student_id: row[5])
            date = row[0] + '-' + row[1] + '-' + row[2] + ' ' + row[3] + ':' + row[4] 
            attendance.yyyy_mm_dd_hh_mm = date
            attendance.year = row[0]
            attendance.month = row[1]
            attendance.day = row[2]
            attendance.save!
            user = User.find_by(student_id: row[5])
            if user.state == false
               user.state = true
               user.save!
                  attendance = Attendance.find_by(student_id: row[5])
               #出席
                  if ("08:00:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("09:20:00").to_time
                     attendance.period1 = 0
                     attendance.save!
                  elsif ("10:10:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("10:20:00").to_time
                     attendance.period2 = 0
                     attendance.save!
                  elsif ("11:10:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("11:20:00").to_time
                     attendance.period3 = 0
                     attendance.save!
                  elsif ("12:10:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("13:00:00").to_time
                     attendance.period4 = 0
                     attendance.save!
                  elsif ("13:50:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("14:00:00").to_time
                     attendance.period5 = 0
                     attendance.save!
               #遅刻
                  elsif ("9:20:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("9:35:00").to_time
                     attendance.period1 = 1
                     attendance.save!
                  elsif ("10:20:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:35:00").to_time
                     attendance.period2 = 1
                     attendance.save!
                  elsif ("11:20:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("11:35:00").to_time
                     attendance.period3 = 1
                     attendance.save!
                  elsif ("13:00:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("13:15:00").to_time
                     attendance.period4 = 1
                     attendance.save!
                  elsif ("14:00:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("14:15:00").to_time
                     attendance.period5 = 1
                     attendance.save!
               #欠席
                  elsif ("09:35:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:10:00").to_time
                     attendance.period1 = 2
                     attendance.save!
                  elsif ("09:35:01").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:10:00").to_time
                     attendance.period2 = 2
                     attendance.save!
                  elsif ("09:35:01").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:10:00").to_time
                     attendance.period3 = 2
                     attendance.save!
                  elsif ("09:35:01").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:10:00").to_time
                     attendance.period4 = 2
                     attendance.save!
                  elsif ("09:35:01").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:10:00").to_time
                     attendance.period5 = 2
                     attendance.save!
                  end
                  
            else
               user.state = false
               user.save!
            end
      end
   end
end

every(1.day, 'period2.job', at: '10:20') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("10:20:00").to_time
         attendance.period2 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

every(1.day, 'period3.job', at: '11:20') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("11:20:00").to_time
         attendance.period3 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

every(1.day, 'period4.job', at: '13:00') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("13:00:00").to_time
         attendance.period4 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

every(1.day, 'period5.job', at: '14:00') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("14:00:00").to_time
         attendance.period5 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

every(1.day, 'period6.job', at: '15:00') do
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      user.state = false
      user.save!
   else
      attendance = Attendance.find_by(student_id: user.student_id, day: time.strftime("%d"))
      if attendance.period1 == 9
         attendance.period1 = 0
      elsif attendance.period2 == 9
         attendance.period2 = 0
      elsif attendance.period3 == 9
         attendance.period3 = 0
      elsif attendance.period4 == 9
         attendance.period4 = 0
      elsif attendance.period5 == 9
         attendance.period5 = 0
      end
      attendance.save!
   end
   end
end

