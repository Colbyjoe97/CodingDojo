Rails.application.routes.draw do
  get 'secrets/index'
  get 'secrets/new'
  get 'users/new'
  get 'users/edit'
  get 'sessions/new'

  get 'secrets' => 'secrets#index'
  get 'users/:id' => 'users#show'
  get 'users/:id/edit' => 'users#editPage'

  post 'users/new' => 'users#create'
  post 'login' => 'sessions#login'

  patch 'users/edit/:id' => 'users#edit'

  delete '/sessions/:id' => 'sessions#destroy'
  delete '/users/:id' => 'users#destroy'
  delete '/secrets/:id' => 'secrets#destroy'
end
