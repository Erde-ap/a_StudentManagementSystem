class UserattendanceController < ApplicationController
  def find
    @studentId = params[:student_id]
    @month = params[:month]
    # if request.post? then
    # @studentId = nil
      result = Attendance.where(student_id: @studentId).where(month: @month)
      @studentId = result.all
      render json: @studentId
    @studentId = nil
    # end
  end



  def rate
    #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
    @studentId = params[:student_id]
    #なんかいい感じに計算
    for @month in 1..12
      @a0 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 0).count
      @a0 = @a0 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 0).count
      @a0 = @a0 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 0).count
      @a0 = @a0 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 0).count
      @a0 = @a0 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 0).count
      @a1 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 1).count
      @a1 = @a1 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 1).count
      @a1 = @a1 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 1).count
      @a1 = @a1 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 1).count
      @a1 = @a1 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 1).count
      @a2 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 2).count
      @a2 = @a2 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 2).count
      @a2 = @a2 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 2).count
      @a2 = @a2 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 2).count
      @a2 = @a2 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 2).count
      @a3 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 3).count
      @a3 = @a3 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 3).count
      @a3 = @a3 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 3).count
      @a3 = @a3 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 3).count
      @a3 = @a3 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 3).count
      @a4 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 4).count
      @a4 = @a4 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 4).count
      @a4 = @a4 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 4).count
      @a4 = @a4 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 4).count
      @a4 = @a4 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 4).count
      @a5 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 5).count
      @a5 = @a5 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 5).count
      @a5 = @a5 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 5).count
      @a5 = @a5 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 5).count
      @a5 = @a5 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 5).count
      @a8 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 8).count
      @a8 = @a8 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 8).count
      @a8 = @a8 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 8).count
      @a8 = @a8 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 8).count
      @a8 = @a8 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 8).count
      @a9 = Attendance.where(student_id: @studentId).where(month: @month).where(period1: 9).count
      @a9 = @a9 + Attendance.where(student_id: @studentId).where(month: @month).where(period2: 9).count
      @a9 = @a9 + Attendance.where(student_id: @studentId).where(month: @month).where(period3: 9).count
      @a9 = @a9 + Attendance.where(student_id: @studentId).where(month: @month).where(period4: 9).count
      @a9 = @a9 + Attendance.where(student_id: @studentId).where(month: @month).where(period5: 9).count
      # 全体日
      @a012345 = @a0 + @a1 + @a2 + @a3 + @a4 + @a5
      # 出席日
      @a035 = @a0 + @a5 + @a3
      # 遅刻1/3
      @a1_3 = @a1 / 3

      @a0a1_3a4 = @a035 + @a1_3
      # @a012345_m_a1a2_3a4 = @a012345 - @a0a1_3a4
      @last = @a0a1_3a4 / @a012345.to_f * 100
      if @month == 1
        if @a9 + @a8 >= 150
          @last1 = 0
        else
          @last1 = @last + @last4 + @last5 + @last6 + @last7 + @last8 + @last9 + @last10 + @last11 + @last12
          @last1 = @last1 / 9
        end

      elsif @month == 2
        if @a9 + @a8 >= 140
          @last2 = 0
        else
          @last2 = @last + @last4 + @last5 + @last6 + @last7 + @last8 + @last9 + @last10 + @last11 + @last12 + @last1
          @last2 = @last2 / 10
        end

      elsif @month == 3
        if @a9 + @a8 >= 155
          @last3 = 0
        else
          @last3 = @last + @last4 + @last5 + @last6 + @last7 + @last8 + @last9 + @last10 + @last11 + @last12 + @last1 + @last2
          @last3 = @last3 / 11
        end

      elsif @month == 4
        if @a9 + @a8 >= 150
          @last4 = 0
        else
          @last4 = @last
        end

      elsif @month == 5
        if @a9 + @a8 >= 155
          @last5 = 0
        else
          @last5 = @last + @last4
          @last5 = @last5 / 2
        end

      elsif @month == 6
        if @a9 + @a8 >= 150
          @last6 = 0
        else
          @last6 = @last + @last4 + @last5
          @last6 = @last6 / 3
        end

      elsif @month == 7
        if @a9 + @a8 >= 155
          @last7 = 0
        else
          @last7 = @last + @last4 + @last5 + @last6
          @last7 = @last7 / 4
        end

      elsif @month == 8
        if @a9 + @a8 >= 155
          @last8 = 0
        else
          @last8 = @last + @last4 + @last5 + @last6 + @last7
          @last8 = @last8 / 5
        end

      elsif @month == 9
        if @a9 + @a8 >= 150
          @last9 = 0
        else
          @last9 = @last + @last4 + @last5 + @last6 + @last7 + @last8
          @last9 = @last9 / 6
        end

      elsif @month == 10
        if @a9 + @a8 >= 155
          @last10 = 0
        else
          @last10 = @last + @last4 + @last5 + @last6 + @last7 + @last8 + @last9
          @last10 = @last10 / 6
        end

      elsif @month == 11
        if @a9 + @a8 >= 150
          @last11 = 0
        else
          @last11 = @last + @last4 + @last5 + @last6 + @last7 + @last8 + @last9 + @last10
          @last11 = @last11 / 7
        end

      elsif @month == 12
        if @a9 + @a8 >= 155
          @last12 = 0
        else
          @last12 = @last + @last4 + @last5 + @last6 + @last7 + @last8 + @last9 + @last10 + @last11
          @last12 = @last12 / 8
        end
      end
    end
    personal = { 'Apr' => @last4.to_int,
                 'May' => @last5.to_int,
                 'Jun' => @last6.to_int,
                 'Jul' => @last7.to_int,
                 'Aug' => @last8.to_int,
                 'Sep' => @last9.to_int,
                 'Oct' => @last10.to_int,
                 'Nov' => @last11.to_int,
                 'Dec' => @last12.to_int,
                 'Jan' => @last1.to_int,
                 'Feb' =>@last2.to_int,
                 'Mar' => @last3.to_int,
    }
    render json: personal
  end
end
