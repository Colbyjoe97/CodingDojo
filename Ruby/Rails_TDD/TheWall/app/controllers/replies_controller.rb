class RepliesController < ApplicationController
  def create
    @user = User.find(session[:user_id])
    @message = Message.find(params[:id])
    @reply = Reply.new(content:params[:content], user:@user, message:@message)

    if @reply.save
      redirect_to :back
    else
      flash[:errors] = @reply.errors.full_messages
      redirect_to :back
    end
  end
end
