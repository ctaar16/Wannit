Rails.application.routes.draw do
  put '/locations/:location_id/items/:id', to: 'items#add_location'
  resources :locations
  resources :items
  resources :users

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
