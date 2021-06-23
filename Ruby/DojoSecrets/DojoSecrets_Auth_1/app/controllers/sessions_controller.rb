class SessionsController < ApplicationController
  def new
    # Render login page
    render 'new'
  end

  def login
    @user = User.find_by_email(params[:email]).try(:authenticate, params[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}"
    else
      flash[:errors] = ["Invalid Combination"]
      redirect_to :back
    end
  end

  def destroy
    # Log user out
    reset_session
    redirect_to sessions_new_path
  end
end
