Rails.application.routes.draw do
  devise_for :views
  resources :user_attendances
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/test',to: 'userattendance#find'
  get '/rate',to: 'userattendance#rate'
  get '/login', to: 'login#login'
  get '/showlist',to: 'teacherview#showtime'
  get '/condel',to: 'confirmation_of_delivery#delivery_not_read'
  get '/already',to: 'confirmation_of_delivery#delivery_already_read'
end
