class CommentsController < ApplicationController

  def create
    @user = User.find(session[:user_id])
    @message = Message.find(params[:id])
    Comment.new(content:params[:content], user:@user, message:@message.id)

    if @comment.save
      redirect_to :back
    else
      flash[:errors] = @comment.errors.full_messages
      redirect_to :back
    end
  end
end
