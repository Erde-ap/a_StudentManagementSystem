class LoginController < ApplicationController
  def login
    # 使わないかも？
    account = User.find_by(student_id: @student_id)
    if login_user != nil
      render json:{
          'student_id' => login_user.student_id,
          'attendance_id' => login_user.attendance_id,
          'name' => login_user.name,
          'grade' => login_user.grade,
          'class' => login_user.classes,
          'permission' => login_user.permission,
          'sessions' => login_user.name.hash,
          'password' => login_user.password
      }
    else
      render json: '403 Forbidden'
    end
  end
end
