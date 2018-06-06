#0：出席　１：遅刻　2：欠席　3：就活　4：病欠　5：公欠 6:初期値
#15分遅れで遅刻
#period1～5の初期値は6

#初回起動時CSV↓
#year,mmonth,day,hour,minute,count
#
#

require_relative '../config/boot'
require_relative '../config/environment'

require 'csv'
require 'clockwork'
require 'fileutils'
require "time"
include Clockwork

csv1 = 0    #最新のCSV更新時間を格納する
csv2 = 0    #CSV更新時間を格納する
number = 1

every(1.second, 'period1.job') do   #1秒ごとにCSV更新時間を確認し更新されて入れば処理
   CSV.foreach("/home/ec2-user/environment/CSV/Student.csv", headers: true) do |row|   #CSV読み込み
      #ファイル更新時間更新
      file = File::stat("/home/ec2-user/environment/CSV/Student.csv")   #CSV更新時間読み込み
      csv2 = file.mtime    #↑を代入
      
      #ファイル更新確認
         if csv2 > csv1                    #CSV更新確認
            csv1 = csv2                               #CSV更新時間の更新
            if row[1].index('0') == 0
               row[1] = row[1].slice(1)
            end
            if row[2].index('0') == 0
               row[2] = row[2].slice(1)
            end
            attendance = Attendance.find_by(student_id: row[5], year: row[0], month: row[1], day: row[2])   #今日の日付の学籍番号のテーブルをセレクト
            attendance.yyyy_mm_dd_hh_mm = csv2                                            #テーブルに登録
            attendance.save!
            user = User.find_by(student_id: row[5])                                       #送られてきた学籍番号のusersテーブルをセレクト
            if user.state == false                                                        #退室しているかどうかを確認
               user.state = true                                                          #退室が登録されていれば入室に
               user.save!
                  attendance = Attendance.find_by(student_id: row[5], year: row[0], month: row[1], day: row[2])#今日の日付の学籍番号のテーブルをセレクト
                  #出席
                  #8時から9時20分、10時10分から10時20分、11時10分から11時20分、12時10分から13時、13時50分から14時は出席を登録
                  if ("08:00:00").to_time <= csv2 && csv2 < ("09:20:00").to_time
                     attendance.period1 = 0
                     attendance.save!
                  elsif ("10:10:00").to_time < csv2 && csv2 < ("10:20:00").to_time
                     attendance.period2 = 0
                     attendance.save!
                  elsif ("11:10:00").to_time < csv2 && csv2 < ("11:20:00").to_time
                     attendance.period3 = 0
                     attendance.save!
                  elsif ("12:10:00").to_time < csv2 && csv2 < ("13:00:00").to_time
                     attendance.period4 = 0
                     attendance.save!
                  elsif ("13:50:00").to_time < csv2 && csv2 < ("14:00:00").to_time
                     attendance.period5 = 0
                     attendance.save!
                  #遅刻
                  #9時20分から9時35分、10時20分から10時35分、11時20分から11時35分、13時から13時15分、14時から14時15分は出席を登録
                  elsif ("9:20:00").to_time <= csv2 && csv2 <= ("9:35:00").to_time
                     attendance.period1 = 1
                     attendance.save!
                  elsif ("10:20:00").to_time <= csv2 && csv2 <= ("10:35:00").to_time
                     attendance.period2 = 1
                     attendance.save!
                  elsif ("11:20:00").to_time <= csv2 && csv2 <= ("11:35:00").to_time
                     attendance.period3 = 1
                     attendance.save!
                  elsif ("13:00:00").to_time <= csv2 && csv2 <= ("13:15:00").to_time
                     attendance.period4 = 1
                     attendance.save!
                  elsif ("14:00:00").to_time <= csv2 && csv2 <= ("14:15:00").to_time
                     attendance.period5 = 1
                     attendance.save!
                  #欠席
                  #9時35分から10時10分、10時20分から10時35分、11時20分から11時35分、13時から13時15分、14時から14時15分は出席を登録
                  elsif ("09:35:00").to_time < csv2 && csv2 <= ("10:10:00").to_time
                     attendance.period1 = 2
                     attendance.save!
                  elsif ("10:35:00").to_time < csv2 && csv2 <= ("11:10:00").to_time
                     attendance.period2 = 2
                     attendance.save!
                  elsif ("11:35:00").to_time < csv2 && csv2 <= ("12:10:00").to_time
                     attendance.period3 = 2
                     attendance.save!
                  elsif ("13:15:00").to_time < csv2 && csv2 <= ("13:50:00").to_time
                     attendance.period4 = 2
                     attendance.save!
                  elsif ("14:15:00").to_time < csv2 && csv2 <= ("14:50:00").to_time
                     attendance.period5 = 2
                     attendance.save!
                  end
                  
            else
               user.state = false   #入室中であれば退室
               user.save!
            end
         end
   end
end

#毎日10時20分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period2.job', at: '10:20') do
   time = Time.now
   today = time.strftime("%Y") + ',' + time.strftime("%m") + ',' +  time.strftime("%d")
   year = time.strftime("%Y")
   month = time.strftime("%m")
   if month.index('0') == 0
      month = month.slice(1)
   end
   day = time.strftime("%d")
   if day.index('0') == 0
      day = day.slice(1)
   end
   if Schedule.find_by(yyyy_mm_dd: today).period2 == 1
   while number < User.count + 1
      user = User.find_by(id: number)
      if user.permission == 0
      if user.state == true
         attendance = Attendance.find_by(student_id: user.student_id, year: year, month: month, day: day)
         if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("10:20:00").to_time
            attendance.period2 = 0
            attendance.save!
         end
      end
      end
      number += 1
   end
   number = 1
   end
end

#毎日11時20分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period3.job', at: '11:20') do
   time = Time.now
   today = time.strftime("%Y") + ',' + time.strftime("%m") + ',' +  time.strftime("%d")
   year = time.strftime("%Y")
   month = time.strftime("%m")
   if month.index('0') == 0
      month = month.slice(1)
   end
   day = time.strftime("%d")
   if day.index('0') == 0
      day = day.slice(1)
   end
   if Schedule.find_by(yyyy_mm_dd: today).period3 == 1
   while number < User.count + 1
      user = User.find_by(id: number)
      if user.permission == 0
      if user.state == true
         attendance = Attendance.find_by(student_id: user.student_id, year: year, month: month, day: day)
         if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("11:20:00").to_time
            attendance.period3 = 0
            attendance.save!
         end
      end
      end
      number += 1
   end
   number = 1
   end
end

#毎日13時00分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period4.job', at: '13:00') do
   time = Time.now 
   today = time.strftime("%Y") + ',' + time.strftime("%m") + ',' +  time.strftime("%d")
   year = time.strftime("%Y")
   month = time.strftime("%m")
   if month.index('0') == 0
      month = month.slice(1)
   end
   day = time.strftime("%d")
   if day.index('0') == 0
      day = day.slice(1)
   end
   if Schedule.find_by(yyyy_mm_dd: today).period4 == 1
   while number < User.count + 1
      user = User.find_by(id: number)
      if user.permission == 0
      if user.state == true
         attendance = Attendance.find_by(student_id: user.student_id, year: year, month: month, day: day)
         if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("13:00:00").to_time
            attendance.period4 = 0
            attendance.save!
         end
      end
      end
      number += 1
   end
   number = 1
   end
end

#毎日14時00分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period5.job', at: '14:00') do
   time = Time.now 
   today = time.strftime("%Y") + ',' + time.strftime("%m") + ',' +  time.strftime("%d")
   year = time.strftime("%Y")
   month = time.strftime("%m")
   if month.index('0') == 0
      month = month.slice(1)
   end
   day = time.strftime("%d")
   if day.index('0') == 0
      day = day.slice(1)
   end
   if Schedule.find_by(yyyy_mm_dd: today).period5 == 1
   while number < User.count + 1
      user = User.find_by(id: number)
      if user.permission == 0
      if user.state == true
         attendance = Attendance.find_by(student_id: user.student_id, year: year, month: month, day: day)
         if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("14:00:00").to_time
            attendance.period5 = 0
            attendance.save!
         end
      end
      end
      number += 1
   end
   number = 1
   end
end

#毎日15時00分に入室中の生徒は退室にする。また退室中の生徒のperiod1~5を9から0に変える
every(1.day, 'period6.job', at: '15:00') do
   time = Time.now
   year = time.strftime("%Y")
   month = time.strftime("%m")
   if month.index('0') == 0
      month = month.slice(1)
   end
   day = time.strftime("%d")
   if day.index('0') == 0
      day = day.slice(1)
   end
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.permission == 0
   if user.state == true
      user.state = false
      user.save!
   end
   schedules = Schedule.find_by(yyyy_mm_dd: time.strftime("%Y") + ',' + time.strftime("%m") + ',' + time.strftime("%d"))
   attendance = Attendance.find_by(student_id: user.student_id, year: year, month: month, day: day)
      if attendance.period1 == 8 && schedules.period1 == true
         attendance.period1 = 0
      end
      if attendance.period2 == 8 && schedules.period2 == true
         attendance.period2 = 0
      end
      if attendance.period3 == 8 && schedules.period3 == true
         attendance.period3 = 0
      end
      if attendance.period4 == 8 && schedules.period4 == true
         attendance.period4 = 0
      end
      if attendance.period5 == 8 && schedules.period5 == true
         attendance.period5 = 0
      end
         attendance.save!
   end
   number += 1
   end
end