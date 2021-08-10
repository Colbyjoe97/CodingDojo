Rails.application.routes.draw do
  get 'users/index'
  get 'posts' => "posts#index"
  post 'post/new' => "posts#create"
  post 'user/new' => 'users#create'
end
