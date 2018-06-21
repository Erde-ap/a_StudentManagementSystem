class TeacherviewController < ApplicationController
  def showtime
  #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
  @x = 1
  @y = 1
  @allmystudent = []
  @classes = params[:classes]
  @day = Date.today
  
  while @x < User.count + 1
    if User.find(@x).classes == @classes.to_i && User.find(@x).grade == 4
      @allmystudent << { 'student_id' => User.find(@x).student_id}
      @y += 1
    end
    @x += 1
  end 
    render json: @allmystudent
  end
  
  def getweek
    @test = {}
    @student_id = params[:student_id]
    @week = params[:week]
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
    
    if Attendance.find_by(student_id: @student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")) != nil
    @test = {'attendance_id' => User.find_by(student_id: @student_id).attendance_id,
              'name' => User.find_by(student_id: @student_id).name,
              'syueekiritu' => User.find_by(student_id: @student_id).syussekiritu,
              'student_id' => User.find_by(student_id: @student_id).student_id,
              'day1_period1' => Attendance.find_by(student_id: @student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")).period1,
              'day1_period2' => Attendance.find_by(student_id: @student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")).period2,
              'day1_period3' => Attendance.find_by(student_id: @student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")).period3,
              'day1_period4' => Attendance.find_by(student_id: @student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")).period4,
              'day1_period5' => Attendance.find_by(student_id: @student_id, year: date.strftime("%Y"), month: date.strftime("%m"), day: date.strftime("%d")).period5,
              'year1' => date.strftime("%Y"),
              'month1' => date.strftime("%m"),
              'day1' => date.strftime("%d"),
              'day2_period1' => Attendance.find_by(student_id: @student_id, year: (date+1).strftime("%Y"), month: (date+1).strftime("%m"), day: (date+1).strftime("%d")).period1,
              'day2_period2' => Attendance.find_by(student_id: @student_id, year: (date+1).strftime("%Y"), month: (date+1).strftime("%m"), day: (date+1).strftime("%d")).period2,
              'day2_period3' => Attendance.find_by(student_id: @student_id, year: (date+1).strftime("%Y"), month: (date+1).strftime("%m"), day: (date+1).strftime("%d")).period3,
              'day2_period4' => Attendance.find_by(student_id: @student_id, year: (date+1).strftime("%Y"), month: (date+1).strftime("%m"), day: (date+1).strftime("%d")).period4,
              'day2_period5' => Attendance.find_by(student_id: @student_id, year: (date+1).strftime("%Y"), month: (date+1).strftime("%m"), day: (date+1).strftime("%d")).period5,
              'year2' => (date+1).strftime("%Y"),
              'month2' =>(date+1).strftime("%m"),
              'day2' => (date+1).strftime("%d"),
              'day3_period1' => Attendance.find_by(student_id: @student_id, year: (date+2).strftime("%Y"), month: (date+2).strftime("%m"), day: (date+2).strftime("%d")).period1,
              'day3_period2' => Attendance.find_by(student_id: @student_id, year: (date+2).strftime("%Y"), month: (date+2).strftime("%m"), day: (date+2).strftime("%d")).period2,
              'day3_period3' => Attendance.find_by(student_id: @student_id, year: (date+2).strftime("%Y"), month: (date+2).strftime("%m"), day: (date+2).strftime("%d")).period3,
              'day3_period4' => Attendance.find_by(student_id: @student_id, year: (date+2).strftime("%Y"), month: (date+2).strftime("%m"), day: (date+2).strftime("%d")).period4,
              'day3_period5' => Attendance.find_by(student_id: @student_id, year: (date+2).strftime("%Y"), month: (date+2).strftime("%m"), day: (date+2).strftime("%d")).period5,
              'year3' => (date+2).strftime("%Y"),
              'month3' =>(date+2).strftime("%m"),
              'day3' => (date+2).strftime("%d"),
              'day4_period1' => Attendance.find_by(student_id: @student_id, year: (date+3).strftime("%Y"), month: (date+3).strftime("%m"), day: (date+3).strftime("%d")).period1,
              'day4_period2' => Attendance.find_by(student_id: @student_id, year: (date+3).strftime("%Y"), month: (date+3).strftime("%m"), day: (date+3).strftime("%d")).period2,
              'day4_period3' => Attendance.find_by(student_id: @student_id, year: (date+3).strftime("%Y"), month: (date+3).strftime("%m"), day: (date+3).strftime("%d")).period3,
              'day4_period4' => Attendance.find_by(student_id: @student_id, year: (date+3).strftime("%Y"), month: (date+3).strftime("%m"), day: (date+3).strftime("%d")).period4,
              'day4_period5' => Attendance.find_by(student_id: @student_id, year: (date+3).strftime("%Y"), month: (date+3).strftime("%m"), day: (date+3).strftime("%d")).period5,
              'year4' => (date+3).strftime("%Y"),
              'month4' =>(date+3).strftime("%m"),
              'day4' => (date+3).strftime("%d"),
              'day5_period1' => Attendance.find_by(student_id: @student_id, year: (date+4).strftime("%Y"), month: (date+4).strftime("%m"), day: (date+4).strftime("%d")).period1,
              'day5_period2' => Attendance.find_by(student_id: @student_id, year: (date+4).strftime("%Y"), month: (date+4).strftime("%m"), day: (date+4).strftime("%d")).period2,
              'day5_period3' => Attendance.find_by(student_id: @student_id, year: (date+4).strftime("%Y"), month: (date+4).strftime("%m"), day: (date+4).strftime("%d")).period3,
              'day5_period4' => Attendance.find_by(student_id: @student_id, year: (date+4).strftime("%Y"), month: (date+4).strftime("%m"), day: (date+4).strftime("%d")).period4,
              'day5_period5' => Attendance.find_by(student_id: @student_id, year: (date+4).strftime("%Y"), month: (date+4).strftime("%m"), day: (date+4).strftime("%d")).period5,
              'year5' => (date+4).strftime("%Y"),
              'month5' =>(date+4).strftime("%m"),
              'day5' => (date+4).strftime("%d")
    }
    end
  
    render json: @test
  end
=begin
  def syusseki
    count0 = 0
    count1 = 0
    y = Attendance.find_by(student_id: @student_id).id
    if y != nil
      while @student_id.to_i == Attendance.find(y).student_id
        data = Attendance.find(y)
        
        if data.period1 == 0 || data.period1 == 3 || data.period1 == 5
          count0 += 1
          count1 += 1
        elsif data.period1 ==1 || data.period1 == 2 || data.period1 == 4
          count1 += 1
        end
        
        if data.period2 == 0 || data.period2 == 3 || data.period2 == 5
          count0 += 1
          count1 += 1
        elsif data.period2 ==1 || data.period2 == 2 || data.period2 == 4
         count1 += 1
        end
     
        if data.period3 == 0 || data.period3 == 3 || data.period3 == 5
          count0 += 1
          count1 += 1
        elsif data.period3 ==1 || data.period3 == 2 || data.period3 == 4
          count1 += 1
        end
    
        if data.period4 == 0 || data.period4 == 3 || data.period4 == 5
          count0 += 1
          count1 += 1
        elsif data.period4 ==1 || data.period4 == 2 || data.period4 == 4
          count1 += 1
        end
    
        if data.period5 == 0 || data.period5 == 3 || data.period5 == 5
          count0 += 1
          count1 += 1
        elsif data.period5 ==1 || data.period5 == 2 || data.period5 == 4
          count1 += 1
        end
      
        y += 1
        if y >= Attendance.count
          break
        end
      end
      
      if count0 == 0 || count1 == 0
        return 0
      else
        return (count0.to_f / count1.to_f * 100).round(0)
      end
    end
  end
=end
end