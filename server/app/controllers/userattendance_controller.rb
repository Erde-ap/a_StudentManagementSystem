class UserattendanceController < ApplicationController
  def find
    #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
    @studentId = params[:student_id]
    @month = params[:month]

    # if request.post? then
      result = Attendance.where(student_id: @studentId).where(month: @month)
      @studentId = result.all
      render json: @studentId
    # end
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
