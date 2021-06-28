class GamesController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:activities] ||= []
    session[:badActivities] ||= []
    render 'index'
  end

  def create
    if params[:location] == "farm"
      num = rand(10..20)
      session[:gold] += num
      session[:activities].push("You gained #{num} gold at the Farm! #{Time.now.ctime}")
      redirect_to '/'
    elsif params[:location] == "cave"
      num = rand(5..10)
      session[:gold] += num
      session[:activities].push("You gained #{num} gold at the Cave! #{Time.now.ctime}")
      redirect_to '/'
    elsif params[:location] == "house"
      num = rand(2..5)
      session[:gold] += num
      session[:activities].push("You gained #{num} gold at the House! #{Time.now.ctime}")
      redirect_to '/'
    elsif params[:location] == "casino"
      num = rand(-50..50)
      session[:gold] += num
      if num > 0
        session[:activities].push("You gained #{num} gold at the Casino! #{Time.now.ctime}")
      else
        session[:badActivities].push("You lost #{num} gold at the Casino! #{Time.now.ctime}")
      end
      redirect_to '/'
    end
  end
end
