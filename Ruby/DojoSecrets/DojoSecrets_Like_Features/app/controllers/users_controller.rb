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
    @secrets = @user.secrets
    render 'show'
  end

  def editPage
    @user = User.find(params[:id])
    render 'edit'
  end

  def edit
    @user = User.find(params[:id])
    @user.name = params[:name]
    @user.email = params[:email]
    if @user.valid?
      @user.save
      redirect_to "/users/#{@user.id}"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.delete
    reset_session
    redirect_to users_new_path
  end

end
