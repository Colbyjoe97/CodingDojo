class LikesController < ApplicationController
  def create
    @like = Like.create(user: current_user, secret: Secret.find(params[:id]))
    @like.save
    redirect_to '/secrets'
  end

  def destroy
    @secret = Secret.find(params[:id])
    @like = Like.find_by(secret: @secret, user: current_user)
    @like.delete
    redirect_to '/secrets'
  end
end
