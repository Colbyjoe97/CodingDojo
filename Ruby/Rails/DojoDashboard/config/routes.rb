Rails.application.routes.draw do
  # Students
  resources :students
  get 'dojos/:id/students/new' => 'students#new'
  post 'dojos/students' => 'students#create'
  patch 'students/:id/edit' => 'students#update'

  # Dojos
  resources :dojos
end


# test