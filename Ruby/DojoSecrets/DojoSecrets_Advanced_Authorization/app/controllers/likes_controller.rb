class LikesController < ApplicationController
  before_action :redirect, only: [:like, :destroy]
  before_action :wrongUser, only: [:destroy]

  def like
    @user = current_user
    @secret = Secret.find(params[:id])
    @like = Like.create(user: @user, secret: @secret)
    @like.save
    redirect_to '/secrets'
  end

  def destroy
    @secret = Secret.find(params[:id])
    @like = Like.find_by(secret: @secret, user: current_user)
    @like.delete
    redirect_to '/secrets'
  end

  def redirect
    if not current_user
      redirect_to sessions_new_path
    end
  end

  def wrongUser
    @user = User.find(params[:id])
    if @user.id != session[:user_id]
      redirect_to '/sessions/new'
    end
  end
end
