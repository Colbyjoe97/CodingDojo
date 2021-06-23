class MessagesController < ApplicationController
  def index
    @user = User.find(session[:user_id])
    # @user = User.last
    @messages = Message.all
    @replies = Reply.all
    render 'index'
  end

  def create
    @user = User.find(session[:user_id])
    # @user = User.last
    @message = Message.create(content: params[:content], user: @user)
    if @message.save
      redirect_to :back
    else
      flash[:errors] = @message.errors.full_messages
      redirect_to :back
    end
  end

  def logout
    reset_session
    redirect_to new_user_path
  end
end
