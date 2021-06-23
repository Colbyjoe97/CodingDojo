class LikesController < ApplicationController
  before_action :redirect
  def like
    @user = current_user
    @like = Like.find_by(user: current_user, idea: Idea.find(params[:id]))
    if @like
      flash[:likeError] = "You cannot like a post more than once!"
      redirect_to :back
    else
      @like = Like.new(user: current_user, idea: Idea.find(params[:id]))
      if @like.valid?
        @like.save
        redirect_to :back
      end
    end

  end

  def destroy
    @like = Like.find_by(idea: Idea.find(params[:id]), user: current_user)
    @like.delete
    redirect_to :back
  end

  def redirect
    if not current_user
      redirect_to '/main'
    end
  end
end
