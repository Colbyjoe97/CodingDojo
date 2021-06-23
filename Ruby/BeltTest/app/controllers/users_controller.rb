class UsersController < ApplicationController
  before_action :redirect, only: [:show]

  def index
    @users = User.all
    render 'index'
  end

  def register
    @user = User.new(name:params[:name], alias:params[:alias], email:params[:email], password:params[:password], password_confirmation:params[:password_confirmation])
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to '/ideas'
    else
      flash[:regErrors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def login
    @user = User.find_by_email(params[:email]).try(:authenticate, params[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to '/ideas'
    else
      flash[:loginErrors] = ["Email or password is invalid"]
      redirect_to :back
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    @likes = Like.where(user: @user)
    @ideas = Idea.where(user:@user)
    if @user
      render 'show'
    else
      redirect_to '/ideas'
    end
  end

  def logout
    reset_session
    redirect_to "/main"
  end

  def redirect
    if not current_user
      redirect_to '/main'
    end
  end
end
