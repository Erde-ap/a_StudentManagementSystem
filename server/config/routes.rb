Rails.application.routes.draw do
  resources :user_attendances
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/test',to: 'userattendance#find'
end
