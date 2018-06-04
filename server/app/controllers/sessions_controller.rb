class SessionsController < ApplicationController
  protect_from_forgery :except => [:sample]

  def index
    # ここでログインしているかを判断している
    # ログインされていたらインスタンスnoticeを定義
    if session[:access_token]
      @notice = "#{session[:access_token]}でログインしています。"
    end
    # ログインボタン押下後にセッションが保存されるかを判断
    if params.key?(:name) || params.key?(:password)
      # nameが一致していれば代入される
      user = User.find_by_name(params[:name])
      # userの中身があるかを判断しuser.authenticateでパスワードが一致しているかを返す
      if user && user.authenticate(params[:password])
        # 一致していたらセッションにユーザー名を登録
        session[:access_token] = params[:name]
        @notice = session[:access_token]
        render json: @notice
      else
        session[:access_token] = nil
        @notice = "はきはき"
        render json: @notice
      end
    end
  end
end