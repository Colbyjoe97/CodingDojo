Rails.application.routes.draw do
  get '' => 'games#index'
  post '/create' => 'games#create'
end
