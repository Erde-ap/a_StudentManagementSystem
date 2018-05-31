class TeacherviewController < ApplicationController
  def showtime
  #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
  @x = 1
  @allmystudent = []
  @permission = params[:permission]
  @classes = params[:classes]
  @day = Date.today
  
  while @x < User.count + 1
    if User.find(@x).classes == @classes.to_i && User.find(@x).attendance_id != 0
      @allmystudent << {'attendance_id' => findnumber, 'name' => findname, 'syussekiritu' => syusseki}
    end
    @x += 1
  end 
    render json: @allmystudent
  end
  
  def findnumber
    return User.find(@x).attendance_id
  end
  
  def findname
    return  User.find(@x).name
  end
  
  def syusseki
    count0 = 0
    count1 = 0
    y = Attendance.find_by(student_id: User.find(@x).student_id).id
    while User.find(@x).student_id == Attendance.find(y).student_id
        data = Attendance.find(y)
      
      if data.period1 == 0
        count0 += 1
        count1 += 1
      elsif data.period1 != 9
        count1 += 1
      end
      
     if data.period2 == 0
        count0 += 1
        count1 += 1
      elsif data.period2 != 9
       count1 += 1
     end
     
    if data.period3 == 0
       count0 += 1
       count1 += 1
     elsif data.period3 != 9
      count1 += 1
    end
    
    if data.period4 == 0
      count0 += 1
      count1 += 1
    elsif data.period4 != 9
      count1 += 1
    end
    
    if data.period5 == 0
      count0 += 1
      count1 += 1
    elsif data.period5 != 9
      count1 += 1
    end
    
    y += 1
    end
    
    if count0 == 0 || count1 == 0
      return 0
    else
      return (count0.to_f / count1.to_f * 100).round(0)
    end
    
  end
  
  def getweek
  @x = 1
  @test = []
  @permission = params[:permission]
  @classes = params[:classes]
  @month = params[:month]
  @week = params[:week]
  
  while @x < User.count + 1
    if User.find(@x).classes == @classes.to_i && User.find(@x).attendance_id != 0
      getdata
    end
    @x += 1
  end
  
  render json: @test
  end
  
  def getdata
    y = Attendance.find_by(student_id: User.find(@x).student_id, month: @month).id
    while Attendance.find(y).month == @month.to_i
      @test << {'student_id' => User.find(@x).student_id,
                'period1' => Attendance.find(y).period1,
                'period2' => Attendance.find(y).period2,
                'period3' => Attendance.find(y).period3,
                'period4' => Attendance.find(y).period4,
                'period5' => Attendance.find(y).period5,
                'year' => Attendance.find(y).year,
                'month' => Attendance.find(y).month,
                'day' => Attendance.find(y).day}
    y += 1
    end
  end

  def getdata2
    date =  Time.now.to_date
    date = date + @week.to_i * 7
    if date.strftime('%w') == "0"
      date = date + 1
    elsif date.strftime('%w') == "2"
      date = date - 1
    elsif date.strftime('%w') == "3"
      date = date - 2
    elsif date.strftime('%w') == "4"
      date = date - 3
    elsif date.strftime('%w') == "5"
      date = date - 4
    elsif date.strftime('%w') == "6"
      date = date - 5
    end
    
    y = Attendance.find_by(student_id: User.find(@x).student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")).id
    
    5.times do
    @test << {'student_id' => User.find(@x).student_id,
              'period1' => Attendance.find(y).period1,
              'period2' => Attendance.find(y).period2,
              'period3' => Attendance.find(y).period3,
              'period4' => Attendance.find(y).period4,
              'period5' => Attendance.find(y).period5,
              'year' => Attendance.find(y).year,
              'month' => Attendance.find(y).month,
              'day' => Attendance.find(y).day}
    y+=1
    end
      
  end
  
end