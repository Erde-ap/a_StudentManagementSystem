class UserattendanceController < ApplicationController
  def find
    @s = 1196500#params[:student_id]
    @m = 5#params[:month]
    # if request.post? then
      result = Attendance.where(student_id: @s).where(month: @m)
      @s = result.all
      render json: @s
    # end
  end
end
