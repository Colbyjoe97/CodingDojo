Rails.application.routes.draw do
  get '' => "users#index"
  get 'users/total' => 'users#total'
  get 'users' => 'users#users'
  get 'users/new' => 'users#createPage'
  get 'users/:id' => 'users#view'
  get 'users/:id/edit' => 'users#editPage'
  post 'users' => 'users#create'
end
