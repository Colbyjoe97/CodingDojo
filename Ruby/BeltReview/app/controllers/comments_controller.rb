class CommentsController < ApplicationController

  def new
    @comment = Comment.new(content: params[:content], user:current_user, event: Event.find(params[:id]))
    if @comment.valid?
      @comment.save
      redirect_to :back
    else
      flash[:errors] = @comment.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    redirect_to :back
  end
end
