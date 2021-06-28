Rails.application.routes.draw do
  # Students
  resources :students
  get 'dojos/:id/students/new' => 'students#new'
  # get 'dojos/:dojoId/students/:studentId' => 'students#showStudent'
  # get 'dojos/:dojoId/students/:studentId/edit' => 'students#editStudentPage'
  post 'dojos/students' => 'students#create'
  patch 'students/:id/edit' => 'students#update'
  # delete 'dojos/:dojoId/students/:studentId' => 'students#delete'

  # # Dojos
  resources :dojos
  # get 'dojos' => 'dojos#index'
  # get 'dojos/new' => 'dojos#new'
  # get 'dojos/:id' => 'dojos#view'
  # get 'dojos/:id/edit' => 'dojos#editPage'
  # patch 'dojos/:id' => 'dojos#update'
  # post 'dojos' => 'dojos#create'
  # delete 'dojos/:id' => 'dojos#destroy'
end
