class SessionsController < ApplicationController
  protect_from_forgery :except => [:sample]

  def index
    # ここでログインしているかを判断している
    # ログインされていたらインスタンスnoticeを定義
    if session[:access_token]
      @notice = "#{session[:access_token]}でログインしています。"
      render json:  @notice
    end
    # ログインボタン押下後にセッションが保存されるかを判断
    if params.key?(:student_id) || params.key?(:password)
      # nameが一致していれば代入される
      user = User.find_by_student_id(params[:student_id])
      # userの中身があるかを判断しuser.authenticateでパスワードが一致しているかを返す
      if user && user.authenticate(params[:password])
        # 一致していたらセッションにユーザー名を登録
        session[:access_token] = params[:password].hash
        render json: {'session' => session[:access_token]}
      else
        session[:access_token] = nil
        render json: {'session' => session[:access_token]}
      end
    end
  end
end