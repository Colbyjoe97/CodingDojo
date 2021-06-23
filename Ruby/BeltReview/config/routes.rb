Rails.application.routes.draw do
  get 'comments/index'
  get 'comments/new'

  get 'events' => 'events#index'
  get '' => 'users#index'
  get 'logout' => 'users#logout'
  get 'event/:id' => 'events#show'
  get 'event/:id/edit' => 'events#edit'
  get 'user/:id/edit' => 'users#edit'

  post 'register' => 'users#register'
  post 'login' => 'users#login'
  post 'events/new' => 'events#new'
  post 'event/:id/join' => 'events#attend'
  post 'comment/:id' => 'comments#new'

  patch 'update/:id/event' => 'events#update'
  patch 'update/:id/user' => 'users#update'

  delete 'event/:id/leave' => 'events#leave'
  delete 'event/:id/delete' => 'events#destroy'
  delete 'comment/:id/delete' => 'comments#destroy'
end
