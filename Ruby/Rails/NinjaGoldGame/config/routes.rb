Rails.application.routes.draw do
  get '' => 'games#index'
  post '/play' => 'games#create'
  get '/reset' => 'games#destroy'
end
