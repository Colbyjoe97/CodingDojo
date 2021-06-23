Rails.application.routes.draw do

  get 'replies/index'

  get 'messages/new'

  get 'users/new'
  get 'logout' => 'messages#logout'
  post 'login' => 'users#login'
  post 'replies/:id' => 'replies#create'

  resources :users
  resources :posts
  resources :messages, only: [:index, :create]
end
