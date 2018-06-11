class TeacherviewController < ApplicationController
  def showtime
  #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
  @x = 1
  @allmystudent = []
  @classes = params[:classes]
  @day = Date.today
  
  while @x < User.count + 1
    if User.find(@x).classes == @classes.to_i && User.find(@x).grade == 4
      @allmystudent << {'attendance_id' => @classes, 'name' => User.find(@x).name, 'syussekiritu' => syusseki}
    end
    @x += 1
  end 
    render json: @allmystudent
  end
  
  def syusseki
    count0 = 0
    count1 = 0
    y = Attendance.find_by(student_id: User.find(@x).student_id).id
    while User.find(@x).student_id == Attendance.find(y).student_id
        data = Attendance.find(y)
      
      if data.period1 == 0 || data.period1 == 3 || data.period1 == 5
        count0 += 1
        count1 += 1
      elsif data.period1 != 9 || data.period1 != 8 
        count1 += 1
      end
      
     if data.period2 == 0 || data.period2 == 3 || data.period2 == 5
        count0 += 1
        count1 += 1
      elsif data.period2 != 9 || data.period2 != 8 
       count1 += 1
     end
     
    if data.period3 == 0 || data.period3 == 3 || data.period3 == 5
       count0 += 1
       count1 += 1
     elsif data.period3 != 9 || data.period3 != 8 
      count1 += 1
    end
    
    if data.period4 == 0 || data.period4 == 3 || data.period4 == 5
      count0 += 1
      count1 += 1
    elsif data.period4 != 9 || data.period4 != 8 
      count1 += 1
    end
    
    if data.period5 == 0 || data.period5 == 3 || data.period5 == 5
      count0 += 1
      count1 += 1
    elsif data.period5 != 9 || data.period5 != 8 
      count1 += 1
    end
    
    y += 1
    if y > Attendance.count
      break
    end
    end
    
    if count0 == 0 || count1 == 0
      return 0
    else
      return ((count0.to_f / count1.to_f * 100).round(2) * 100).to_i
    end
  end
  
  def getweek
  @x = 1
  @test = []
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
    
    if Attendance.find_by(student_id: User.find(@x).student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")) != nil
    
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
  
end