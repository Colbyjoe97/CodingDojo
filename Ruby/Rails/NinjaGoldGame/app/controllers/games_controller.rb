class GamesController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:activities] ||= []
    render 'index'
  end

  def create
    if params[:location] == "farm"
      num = rand(10..20)
      session[:gold] += num
      session[:activities].push(num)
      redirect_to :back
    elsif params[:location] == "cave"
      num = rand(5..10)
      session[:gold] += num
      session[:activities].push(num)
      redirect_to :back
    elsif params[:location] == "house"
      num = rand(2..5)
      session[:gold] += num
      session[:activities].push(num)
      redirect_to :back
    elsif params[:location] == "casino"
      num = rand(-50..50)
      session[:gold] += num
      session[:activities].push(num)
      redirect_to :back
    end
  end

  def destroy
    reset_session
    redirect_to :back
  end
end
