class SecretsController < ApplicationController
  def index
    @secrets = Secret.all
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


end
