Rails.application.routes.draw do
  get 'likes/like'
  get 'likes/destroy'
  get 'ideas/index'
  get 'users/index'
  get 'users/register'
  get 'users/login'

  get 'main' => 'users#index'
  get 'logout' => 'users#logout'
  get 'user/:id' => 'users#show'

  get 'ideas' => 'ideas#index'
  get 'ideas/:id' => 'ideas#show'

  post 'login' => 'users#login'
  post 'register' => 'users#register'
  post 'idea/new' => 'ideas#new'
  post 'like/:id' => 'likes#like'

  delete 'unlike/:id' => 'likes#destroy'
  delete 'delete/:id' => 'ideas#destroy'
end
