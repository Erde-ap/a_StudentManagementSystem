class LoginController < ApplicationController
  def login
    # 使わないかも？
    @student_id = 1196500#params[:student_id]
#    @password = e7MdK3Lz#params[:password]
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
          'password' => login_user.password_digest
      }
    else
      render json: '403 Forbidden'
    end
  end
end
