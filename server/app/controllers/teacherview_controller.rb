class TeacherviewController < ApplicationController
  def showtime
    #データを受け取れる場合は以下２つの前の数字を消してコメントアウトしているparms[]を有効に
      # @permission = 0#params[:permission]
      # @classes = 1#params[:classes]
      @groups = [1, 2, 3]
      @students = User.where(classes: @classes)
      @name = @students.()
      render json: @name
  end
end
