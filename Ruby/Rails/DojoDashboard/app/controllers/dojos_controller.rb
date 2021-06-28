class DojosController < ApplicationController

  def index
    session[:count] = 0
    for dojo in Dojo.all
      session[:count] += 1
    end
    @dojos = Dojo.all
  end

  def new
    render 'createPage'
  end

  def create
    @dojo = Dojo.create( dojo_params )
    redirect_to '/dojos'
  end

  def show
    @students = Student.where(dojo: params[:id])
    @dojo = Dojo.find(params[:id])
  end

  def edit
    @dojo = Dojo.find(params[:id])
  end

  def update
    @dojo = Dojo.find(params[:id])
    @dojo.update(dojo_params)
    if @dojo.valid?
      @dojo.save
      redirect_to dojos_path
    else
      flash[:errors] = @dojo.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    @dojo = Dojo.find(params[:id])
    @dojo.delete
    redirect_to '/dojos'
  end

  private
  def dojo_params
    params.require(:dojo).permit(:branch, :street, :city, :state)
  end
end