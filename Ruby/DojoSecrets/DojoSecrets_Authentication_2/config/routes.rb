Rails.application.routes.draw do
  get 'likes/destroy'
  get 'secrets/index'
  get 'secrets/new'
  get 'users/new'
  get 'users/edit'
  get 'sessions/new'

  get 'secrets' => 'secrets#index'
  get 'users/:id' => 'users#show'
  get 'users/:id/edit' => 'users#editPage'

  post 'like/:id' => 'likes#create'
  post 'users/new' => 'users#create'
  post 'login' => 'sessions#login'

  patch 'users/edit/:id' => 'users#edit'

  delete '/sessions/:id' => 'sessions#destroy'
  delete '/users/:id' => 'users#destroy'
  delete '/secrets/:id' => 'secrets#destroy'
  delete 'likes/:id' => 'likes#destroy'
end
