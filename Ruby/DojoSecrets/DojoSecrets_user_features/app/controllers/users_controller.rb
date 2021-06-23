class UsersController < ApplicationController
  def new
    render 'new'
  end

  def create
    @user = User.new(name: params[:Name], email: params[:Email], password: params[:Password], password_confirmation: params[:Password_Confirmation])
    if @user.valid?
      @user.save
      redirect_to sessions_new_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @user = User.find(params[:id])
    render 'show'
  end

  def edit
  end
end
