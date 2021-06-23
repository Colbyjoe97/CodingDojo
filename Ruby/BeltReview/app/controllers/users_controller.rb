class UsersController < ApplicationController
  def index
    render 'index'
  end

  def register
    @user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], location: params[:location], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to '/events'
    else
      flash[:regErrors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def edit
    render 'edit'
  end

  def update
    @user = User.find(params[:id])
    @user.update(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], location:params[:location], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.valid?
      @user.save
      redirect_to '/events'
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def login
    @user = User.find_by_email(params[:email]).try(:authenticate, params[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to '/events'
    else
      flash[:loginErrors] = ["Email or password is invalid"]
      redirect_to :back
    end
  end

  def logout
    reset_session
    redirect_to '/'
  end
end
