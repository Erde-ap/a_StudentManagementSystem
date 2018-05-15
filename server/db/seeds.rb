# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#User作成(先頭のみわかりやすく改行)
User.create(
    student_id:1196499,
    attendance_id:1,
    password:'kH96rQaz',
    name:'麻生達男',
    grade:4,
    classes:1,
    permission:0,
    state:false
)
User.create(student_id:1196500, attendance_id:2, password:'e7MdK3Lz', name:'有馬敏伸', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196501, attendance_id:3, password:'W9q8zLei', name:'依田孝子', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196502, attendance_id:4, password:'t8FZmAnH', name:'岩田莉子', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196503, attendance_id:5, password:'j3AqZKkw', name:'大下典子', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196504, attendance_id:6, password:'eN7Dxh8c', name:'恩田優依', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196505, attendance_id:7, password:'g6FtKHnk', name:'笠原夏実', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196506, attendance_id:8, password:'g6FtKHnk', name:'加藤哲朗', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196507, attendance_id:9, password:'Qg4iMfxv', name:'川島羽菜', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196508, attendance_id:10, password:'dJ8sBbxy', name:'塩田幸次', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196509, attendance_id:11, password:'v6FhyHEi', name:'嶋田晴久', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196510, attendance_id:12, password:'Tu5aBVRi', name:'竹中愛結', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196511, attendance_id:13, password:'dL24hCcJ', name:'徳田敏宏', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196512, attendance_id:14, password:'uX2H6get', name:'富永康子', grade:4, classes:1, permission:0, state:false)
User.create(student_id:1196513, attendance_id:15, password:'iD6AUz2X', name:'藤村千代', grade:4, classes:1, permission:0, state:false)
User.create(student_id:0000001, attendance_id:0, password:'r8FPkwev', name:'岡晋一', grade:0, classes:0, permission:2, state:false)
User.create(student_id:0100001, attendance_id:0, password:'Pkgkme7e', name:'江口良一', grade:0, classes:0, permission:2, state:false)

#request作成(先頭のみわかりやすく改行)
Request.create(
    student_id:1196500,
    req_year:2018,
    req_month:5,
    req_day:8,
    req_type:0,
    reason:'この日は出席していました。変更おねがいします。',
    req_date:'2018,05,08',
    apply_state:false,
    req_period1:0,
    req_period2:0,
    req_period3:0,
    req_period4:0,
    req_period5:0
)
Request.create(student_id:1196513, req_year:2018, req_month:5, req_day:8, req_type:2, reason:'風邪を引いていたので出席していません', req_date:'2018,05,09', apply_state:false, req_period1:2, req_period2:2, req_period3:2, req_period4:2, req_period5:2,)
Request.create(student_id:1196506, req_year:2018, req_month:5, req_day:9, req_type:1, reason:'欠席じゃなくて遅刻です', req_date:'2018,05,10', apply_state:false, req_period1:1, req_period2:2, req_period3:2, req_period4:2, req_period5:2,)
#attendances作成(先頭のみわかりやすく改行)
Attendance.create(
    student_id:1196514,
    yyyy_mm_dd_hh:'2018,05,08',
    period1:0,
    period2:0,
    period3:0,
    period4:1,
    period5:1
)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,08', period1:1, period2:1, period3:1, period4:1, period5:1)
Attendance.create(student_id:1196501, yyyy_mm_dd_hh:'2018,05,08', period1:1, period2:1, period3:1, period4:0, period5:0)
Attendance.create(student_id:1196502, yyyy_mm_dd_hh:'2018,05,09', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196503, yyyy_mm_dd_hh:'2018,05,10', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196504, yyyy_mm_dd_hh:'2018,05,11', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196505, yyyy_mm_dd_hh:'2018,05,12', period1:3, period2:3, period3:3, period4:3, period5:3)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,01', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,02', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,03', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,04', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,05', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,06', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,07', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,08', period1:1, period2:1, period3:1, period4:1, period5:1)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,09', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,10', period1:0, period2:0, period3:0, period4:3, period5:3)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,11', period1:0, period2:0, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,12', period1:3, period2:3, period3:0, period4:0, period5:0)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,13', period1:4, period2:4, period3:4, period4:4, period5:4)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,14', period1:4, period2:4, period3:4, period4:4, period5:4)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,15', period1:0, period2:0, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,16', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,17', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,18', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,19', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,20', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,21', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,22', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,23', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,24', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,25', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,26', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,27', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,28', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,29', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,30', period1:2, period2:2, period3:2, period4:2, period5:2)
Attendance.create(student_id:1196500, yyyy_mm_dd_hh:'2018,05,31', period1:2, period2:2, period3:2, period4:2, period5:2)
#schedule作成
Schedule.create(yyyy_mm_dd:'2018,05,01', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,02', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,03', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,04', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,05', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,06', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,07', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,08', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,09', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,10', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,11', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,12', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,13', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,14', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,15', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,16', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,17', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,18', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,19', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,20', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,21', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,22', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,23', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,24', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,25', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,26', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,27', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,05,28', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,29', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,30', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,05,31', period1:true, period2:true, period3:true, period4:true, period5:true,)
Schedule.create(yyyy_mm_dd:'2018,06,01', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,06,02', period1:false, period2:false, period3:false, period4:false, period5:false,)
Schedule.create(yyyy_mm_dd:'2018,06,03', period1:false, period2:false, period3:false, period4:false, period5:false,)

