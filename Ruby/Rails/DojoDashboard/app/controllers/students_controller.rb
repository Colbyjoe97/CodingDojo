class StudentsController < ApplicationController
  def new
    @dojo = Dojo.find(params[:id])
    @dojos = Dojo.all
  end

  def create
    @dojo = Dojo.find(student_params[:dojo_id])
    @student = Student.new(student_params)
    if @student.valid?
      @student.save
      redirect_to "/dojos/#{@student.dojo.id}"
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @student = Student.find(params[:id])
    @dojo = @student.dojo
    @start_date = @student.created_at.beginning_of_day
  	@end_date   = @student.created_at.end_of_day
    @cohorts = Student.where(dojo: @dojo, :created_at => @start_date..@end_date)
  end

  def edit
    @dojos = Dojo.all
    @student = Student.find(params[:id])
    @dojo = @student.dojo
  end

  def update
    @student = Student.find(params[:id])
    @student.update(student_params)
    if @student.valid?
      @student.save
      redirect_to "/dojos/#{@student.dojo.id}"
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    @student = Student.find(params[:id])
    @student.delete
    redirect_to :back
  end

  private
  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
  end
end
