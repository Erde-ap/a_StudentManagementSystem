Rails.application.routes.draw do
  get 'sessions/index'
  devise_for :views
  resources :user_attendances
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # 生徒トップ画面
  get '/test',to: 'userattendance#find'
  # 生徒出席率計算
  get '/rate',to: 'userattendance#rate'
  #
  get '/showlist',to: 'teacherview#showtime'
  # 生徒週間出席情報
  get '/showweek',to: 'teacherview#getweek'
  # 未読一覧
  get '/condel',to: 'confirmation_of_delivery#delivery_not_read'
  #既読一覧
  get '/already',to: 'confirmation_of_delivery#delivery_already_read'
  # 未読を既読に変える
  get '/checkpost',to: 'confirmation_of_delivery#change_apply_state'
  # 平日を休みに変える
  get '/daystate',to: 'daystate#daystate'
  #
  post '/changepost',to: 'add_delivery_to_database#create'
  # ログインのセッション管理
  post 'selo',to: 'sessions#index'
  #
  post '/passchange',to: 'passchange#password_changer'
end
