class HelloController < ApplicationController
  def index
    render plain: 'Hello Coding Dojo!'
  end

  def sayHello
    render plain: 'Saying Hello!'
  end

  def helloJoe
    render plain: 'Hello Joe!'
  end
  def helloMichael
    render plain: 'Hello Michael!'
  end
  def home
    render plain: 'What do you want me to say?'
  end
  def times
    session[:count] ||= 0
    session[:count] += 1
    render plain: "You've visited this site #{session[:count]} times!"
  end
  def reset
    reset_session
    render plain: "Destroyed the session!"
  end
end
