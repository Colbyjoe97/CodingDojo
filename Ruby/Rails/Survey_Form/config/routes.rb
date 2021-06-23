Rails.application.routes.draw do
  get '' => 'users#index'
  get 'result' => 'users#result'
  post 'submit' => 'users#submit'
end
