class IdeasController < ApplicationController
  before_action :redirect

  def index
    @ideas = Idea.all.sort { |x,y| y.likes.count <=> x.likes.count }
    render 'index'
  end

  def new
    @idea = Idea.new(content:params[:content], user:current_user)
    if @idea.valid?
      @idea.save
      redirect_to :back
    else
      flash[:ideaErrors] = @idea.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @idea = Idea.find_by(id: params[:id])
    @likes = Like.where(idea: @idea)
    if @idea
      render 'show'
    else
      redirect_to '/ideas'
    end
  end

  def destroy
    @idea = Idea.find(params[:id])
    if @idea.user != current_user
      flash[:deleteError] = "You cannot delete someone elses idea!"
      redirect_to :back
    else
      @idea.delete
      redirect_to :back
    end
  end

  def redirect
    if not current_user
      redirect_to '/main'
    end
  end
end