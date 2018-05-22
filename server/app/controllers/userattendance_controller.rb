class UserattendanceController < ApplicationController
  def find
    @studentId = params[:student_id]
    @month = params[:month]
    # if request.post? then
      result = Attendance.where(student_id: @studentId).where(month: @month)
      @studentId = result.all
      render json: @studentId
    # end
  end



  def rate
    #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
    @studentId = params[:student_id]
    #なんかいい感じに計算
    for @month in 1..12
      @a0 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 0).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 0).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 0).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 0).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 0).count
      @a1 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 1).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 1).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 1).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 1).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 1).count
      @a2 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 2).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 2).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 2).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 2).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 2).count
      @a3 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 3).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 3).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 3).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 3).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 3).count
      @a4 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 4).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 4).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 4).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 4).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 4).count
      @a5 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 5).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 5).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 5).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 5).count
      + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 5).count
      @a012345 = @a0 + @a1 + @a2 + @a3 + @a4 + @a5
      @a14 = @a1 + @a4
      @a2_3 = @a2 / 3
      @a1a2_3a4 = @a14 + @a2_3
      @a012345_m_a1a2_3a4 = @a012345 - @a1a2_3a4
      @last = @a012345_m_a1a2_3a4 / @a012345.to_f * 100
      if @month == 1
        @last1 = @last
      elsif @month == 2
        @last2 = @last
      elsif @month == 3
        @last3 = @last
      elsif @month == 4
        @last4 = @last
      elsif @month == 5
        @last5 = @last
      elsif @month == 6
        @last6 = @last
      elsif @month == 7
        @last7 = @last
      elsif @month == 8
        @last8 = @last
      elsif @month == 9
        @last9 = @last
      elsif @month == 10
        @last10 = @last
      elsif @month == 11
        @last11 = @last
      elsif @month == 12
        @last12 = @last
      end
    end
    personal = { 'Apr' => @last4.to_int, 'May' => @last5.to_int, 'Jun' => @last6.to_int,
                 'Jul' => @last7.to_int, 'Aug' => @last8.to_int, 'Sep' => @last9.to_int,
                 'Oct' => @last10.to_int, 'Nov' => @last11.to_int, 'Dec' => @last12.to_int,
                 'Jan' => @last1.to_int, 'Feb' =>@last2.to_int , 'Mar' => @last3.to_int
    }
    render json: personal

  end
  # def index
  #   @permission = 0 #params[:permission]
  #   @classes = 1#params[:classes]
  #   @month = 5#params[:month]
  #
  #   result = User.where(parmission: @permission).where(classes: @classes).where(month: @m)
  #   @result = result.all
  # end
end
