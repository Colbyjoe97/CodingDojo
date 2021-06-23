Rails.application.routes.draw do
  get '' => 'hello#home'
  get 'hello' => "hello#index"
  get 'say/hello' => "hello#sayHello"
  get 'say/hello/joe' => "hello#helloJoe"
  get 'say/hello/michael' => "hello#helloMichael"
  get 'times' => "hello#times"
  get 'reset' => "hello#reset"
end
