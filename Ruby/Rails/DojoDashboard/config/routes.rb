Rails.application.routes.draw do
  # Students
  get 'dojos/:id/students/new' => 'students#createPage'
  get 'dojos/:dojoId/students/:studentId' => 'students#showStudent'
  get 'dojos/:dojoId/students/:studentId/edit' => 'students#editStudentPage'
  post 'dojos/:id/students' => 'students#createStudent'
  patch 'dojos/:dojoId/students/:studentId' => 'students#submitEdit'
  delete 'dojos/:dojoId/students/:studentId' => 'students#delete'


  # Dojos
  get '' => 'dojos#move'
  get 'dojos' => 'dojos#index'
  get 'dojos/new' => 'dojos#new'
  get 'dojos/:id' => 'dojos#view'
  get 'dojos/:id/edit' => 'dojos#editPage'
  patch 'dojos/:id' => 'dojos#update'
  post 'dojos' => 'dojos#create'
  delete 'dojos/:id' => 'dojos#destroy'
end
