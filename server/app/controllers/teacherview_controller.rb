class TeacherviewController < ApplicationController
  def showtime
      @permission = 0#params[:permission]
      @classes = 1#params[:classes]
      @month = 5#params[:month]

      @students = User.where(classes: @classes)
      @name = @students
      render json: @name
  end
end
