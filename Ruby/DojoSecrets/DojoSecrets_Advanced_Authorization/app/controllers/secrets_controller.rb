class SecretsController < ApplicationController
  before_action :redirect, only: [:index, :new, :destroy, :like]
  def index
    @secrets = Secret.all
    @likes = Like.all
    @user = User.find(session[:user_id])
    render 'index'
  end

  def new
    @user = User.find(session[:user_id])
    @secret = Secret.create(content: params[:content], user: @user)
    redirect_to "/users/#{@user.id}"
  end

  def destroy
    @user = User.find(session[:user_id])
    @secret = Secret.find(params[:id])
    @secret.delete
    redirect_to "/users/#{@user.id}"
  end

  def redirect
    if not current_user
      redirect_to sessions_new_path
    end
  end
end
