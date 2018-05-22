class LoginController < ApplicationController
  def login
    login_user = User.find_by(student_id:params[:student_id],password:params[:password])
    if login_user != nil
      render json:{
          'student_id' => login_user.student_id,
          'attendance_id' => login_user.attendance_id,
          'name' => login_user.name,
          'grade' => login_user.grade,
          'class' => login_user.classes,
          'permission' => login_user.permission,
      }
    else
      render json: '403 Forbidden'
    end
  end
end
