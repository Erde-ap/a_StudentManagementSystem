class UserattendanceController < ApplicationController
  def find
    @s = 1196500#params[:student_id]
    @m = 5#params[:month]
    # if request.post? then
      result = Attendance.where(student_id: @s).where(month: @m)
      @s = result.all
      render json: @s
    # end

    #出席率計算
    @m_absence = Attendance.where(student_id: @s).where(month: @m).where(period1: 1) or Attendance.where(student_id: @s).where(month: @m).where(period2: 1) or Attendance.where(student_id: @s).where(month: @m).where(period3: 1) or Attendance.where(student_id: @s).where(month: @m).where(period4: 1).count or Attendance.where(student_id: @s).where(month: @m).where(period5: 1).count
    @sick = Attendance.where(student_id: @s).where(month: @m).where(period1: 4) or
        Attendance.where(student_id: @s).where(month: @m).where(period2: 4) or
        Attendance.where(student_id: @s).where(month: @m).where(period3: 4) or
        Attendance.where(student_id: @s).where(month: @m).where(period4: 4) or
        Attendance.where(student_id: @s).where(month: @m).where(period5: 4).count
  end
end
