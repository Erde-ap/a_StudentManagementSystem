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

csv1 = 0    #最新のCSV更新時間を格納する
csv2 = 0    #CSV更新時間を格納する
date = ""   #attendancesテーブルのyyyy_mm_dd_hh_mm
number = 1

every(1.second, 'period1.job') do   #1秒ごとにCSV更新時間を確認し更新されて入れば処理
   CSV.foreach("/home/jaguar/Student.csv", headers: true) do |row|   #CSV読み込み
      #ファイル更新時間更新
      file = File::stat("/home/jaguar/Student.csv")   #CSV更新時間読み込み
      csv2 = file.mtime                               #↑を代入
      
      #ファイル更新確認
      if csv2 > csv1 || csv1 == 0                     #CSV更新確認
            csv1 = csv2                               #CSV更新時間の更新
            attendance = Attendance.find_by(student_id: row[5], year: row[0], month: row[1], day: row[2])   #今日の日付の学籍番号のテーブルをセレクト
            date = row[0] + '-' + row[1] + '-' + row[2] + ' ' + row[3] + ':' + row[4]     #CSVの年月日時間を代入
            attendance.yyyy_mm_dd_hh_mm = date                                            #テーブルに登録
            attendance.year = row[0]                                                      #テーブルに年を登録
            attendance.month = row[1]                                                     #テーブルに月を登録
            attendance.day = row[2]                                                       #テーブルに日を登録
            attendance.save!
            user = User.find_by(student_id: row[5])                                       #送られてきた学籍番号のusersテーブルをセレクト
            if user.state == false                                                        #退室しているかどうかを確認
               user.state = true                                                          #退室が登録されていれば入室に
               user.save!
                  attendance = Attendance.find_by(student_id: row[5], year: row[0], month: row[1], day: row[2])#今日の日付の学籍番号のテーブルをセレクト
p "入室"
p "変更前------------------------------------------------------------------------------------------------------------------------------------------------"
p attendance.period1
p attendance.period2
p attendance.period3
p attendance.period4
p attendance.period5
p "------------------------------------------------------------------------------------------------------------------------------------------------------------"
                  #出席
                  #8時から9時20分、10時10分から10時20分、11時10分から11時20分、12時10分から13時、13時50分から14時は出席を登録
                  if ("08:00:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("09:20:00").to_time
                     p "1"
                     attendance.period1 = 0
                     attendance.save!
                  elsif ("10:10:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("10:20:00").to_time
                     p "2"
                     attendance.period2 = 0
                     attendance.save!
                  elsif ("11:10:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("11:20:00").to_time
                     p "3"
                     attendance.period3 = 0
                     attendance.save!
                  elsif ("12:10:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("13:00:00").to_time
                                       p "4"
                     attendance.period4 = 0
                     attendance.save!
                  elsif ("13:50:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time < ("14:00:00").to_time
                                       p "5"
                     attendance.period5 = 0
                     attendance.save!
                  #遅刻
                  #9時20分から9時35分、10時20分から10時35分、11時20分から11時35分、13時から13時15分、14時から14時15分は出席を登録
                  elsif ("9:20:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("9:35:00").to_time
                                       p "6"
                     attendance.period1 = 1
                     attendance.save!
                  elsif ("10:20:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:35:00").to_time
                                       p "7"
                     attendance.period2 = 1
                     attendance.save!
                  elsif ("11:20:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("11:35:00").to_time
                                       p "8"
                     attendance.period3 = 1
                     attendance.save!
                  elsif ("13:00:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("13:15:00").to_time
                                       p "9"
                     attendance.period4 = 1
                     attendance.save!
                  elsif ("14:00:00").to_time <= csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("14:15:00").to_time
                                       p "10"
                     attendance.period5 = 1
                     attendance.save!
                  #欠席
                  #9時35分から10時10分、10時20分から10時35分、11時20分から11時35分、13時から13時15分、14時から14時15分は出席を登録
                  elsif ("09:35:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("10:10:00").to_time
                                       p "11"
                     attendance.period1 = 2
                     attendance.save!
                  elsif ("10:35:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("11:10:00").to_time
                                       p "12"
                     attendance.period2 = 2
                     attendance.save!
                  elsif ("11:35:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("12:10:00").to_time
                                       p "13"
                     attendance.period3 = 2
                     attendance.save!
                  elsif ("13:15:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("13:50:00").to_time
                                       p "14"
                     attendance.period4 = 2
                     attendance.save!
                  elsif ("14:15:00").to_time < csv2.strftime("%H:%M:%S") && csv2.strftime("%H:%M:%S").to_time <= ("14:50:00").to_time
                                       p "15"
                     attendance.period5 = 2
                     attendance.save!
                  end
p "変更後------------------------------------------------------------------------------------------------------------------------------------------------"
p attendance.period1
p attendance.period2
p attendance.period3
p attendance.period4
p attendance.period5
p "------------------------------------------------------------------------------------------------------------------------------------------------------------"
                  
            else
p "退室"
               user.state = false   #入室中であれば退室
               user.save!
            end
      end
   end
end

#毎日10時20分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period2.job', at: '10:20') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, year: time.strftime("%Y"), month: time.strftime("%m"), day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("10:20:00").to_time
         attendance.period2 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

#毎日11時20分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period3.job', at: '11:20') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, year: time.strftime("%Y"), month: time.strftime("%m"), day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("11:20:00").to_time
         attendance.period3 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

#毎日13時00分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period4.job', at: '13:00') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, year: time.strftime("%Y"), month: time.strftime("%m"), day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("13:00:00").to_time
         attendance.period4 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

#毎日14時00分までに登校している生徒で入室中の場合はperiod2も出席に
every(1.day, 'period5.job', at: '14:00') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      attendance = Attendance.find_by(student_id: user.student_id, year: time.strftime("%Y"), month: time.strftime("%m"), day: time.strftime("%d"))
      if attendance.yyyy_mm_dd_hh_mm.to_time <=  ("14:00:00").to_time
         attendance.period5 = 0
         attendance.save!
      end
   number += 1
   end
   number = 1
   end
end

#毎日15時00分に入室中の生徒は退室にする。また退室中の生徒のperiod1~5を9から0に変える
every(1.day, 'period6.job', at: '15:00') do
   time = Time.now
   while number < User.count + 1
   user = User.find_by(id: number)
   if user.state == true
      user.state = false
      user.save!
   end
   attendance = Attendance.find_by(student_id: user.student_id, year: time.strftime("%Y"), month: time.strftime("%m"), day: time.strftime("%d"))
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