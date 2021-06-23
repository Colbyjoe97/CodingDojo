class UsersController < ApplicationController
  def index
    render plain: "Hello World"
  end

  def users
    render json: User.all
  end

  def createPage
    render 'index'
  end

  def create
    @user = User.create(user_params)
    redirect_to '/users'
  end

  def view
    render json: User.where(id: params[:id])
  end

  def editPage
    @user = User.where(id: params[:id])
    render 'editPage'
  end

  def total
    count = 0
    for user in User.all
      count += 1
    end
    render plain: "There are #{count} total users!"
  end

  private
  def user_params
    params.require(:user).permit(:name)
  end
end