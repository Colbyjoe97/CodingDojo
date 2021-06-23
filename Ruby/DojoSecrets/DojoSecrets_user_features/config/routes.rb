Rails.application.routes.draw do
  get 'users/new'

  post 'users/new' => 'users#create'

  get 'users/:id' => 'users#show'

  get 'users/edit'

  get 'sessions/new'

  post 'login' => 'sessions#login'

  delete '/sessions/:id' => 'sessions#destroy'
end
