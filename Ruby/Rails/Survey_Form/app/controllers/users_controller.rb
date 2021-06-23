class UsersController < ApplicationController
  def index
    render 'index'
  end

  def submit
    session[:name] = params[:name]
    session[:location] = params[:location]
    session[:language] = params[:language]
    session[:comment] = params[:comment]
    redirect_to '/result'
  end

  def result
    render 'result'
  end

end
