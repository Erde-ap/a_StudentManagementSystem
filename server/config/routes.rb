Rails.application.routes.draw do
  get 'sessions/index'
  devise_for :views
  resources :user_attendances
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/test',to: 'userattendance#find'
  get '/rate',to: 'userattendance#rate'
  get '/showlist',to: 'teacherview#showtime'
  get '/showweek',to: 'teacherview#getweek'
  get '/condel',to: 'confirmation_of_delivery#delivery_not_read'
  get '/already',to: 'confirmation_of_delivery#delivery_already_read'
  get '/checkpost',to: 'confirmation_of_delivery#change_apply_state'
  get '/daystate',to: 'daystate#daystate'
  post '/changepost',to: 'add_delivery_to_database#create'
  post 'selo',to: 'sessions#index'
  post '/passchange',to: 'passchange#password_changer'
end
