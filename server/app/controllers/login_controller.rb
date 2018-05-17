class LoginController < ApplicationController
  def login
    login_user = User.find_by(student_id:params[:student_id],password:params[:password])
    if login_user != nil
      render json: login_user
    else
      render json: 'no auth'
    end
  end
end
