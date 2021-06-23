class UsersController < ApplicationController
  def new
    render 'new'
  end

  def show
    @user = User.find(params[:id])
    render 'show'
  end

  def edit
  end
end