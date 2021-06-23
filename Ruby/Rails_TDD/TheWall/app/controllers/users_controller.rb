class UsersController < ApplicationController
  def new
    @users = User.all
  end

  def login
    @user = User.find_by(first_name: params[:first_name])
    if @user
      session[:user_id] = @user.id
      redirect_to messages_path
    else
      @user = User.new(first_name: params[:first_name])
      if @user.valid?
        @user.save
        session[:user_id] = @user.id
        return redirect_to messages_path
      else
        flash[:failed] = @user.errors.full_messages
  			return redirect_to :back
      end
    end
  end



end
