Rails.application.routes.draw do
  get 'users/new'
  get 'users/edit'
  get 'sessions/new'

  get 'users/:id' => 'users#show'
  get 'users/:id/edit' => 'users#editPage'

  post 'users/new' => 'users#create'
  post 'login' => 'sessions#login'

  patch 'users/edit/:id' => 'users#edit'

  delete '/sessions/:id' => 'sessions#destroy'
  delete '/users/:id' => 'users#destroy'
end
