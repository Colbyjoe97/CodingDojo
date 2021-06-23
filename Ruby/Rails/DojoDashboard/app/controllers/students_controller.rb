class StudentsController < ApplicationController
  def createPage
    @dojo = Dojo.find(params[:id])
    @allDojos = Dojo.all
    render 'createStudent'
  end

  def createStudent
    @student = Student.new(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], dojo:Dojo.find(params[:dojo]))
    @student.save
    @dojo = Dojo.find(params[:dojo])
    redirect_to "/dojos/#{@dojo.id}"
  end

  def showStudent
    @student = Student.find(params[:studentId])
    @dojo = Dojo.find(params[:dojoId])
    @start_date = @student.created_at.beginning_of_day
  	@end_date   = @student.created_at.end_of_day
    @cohorts = Student.where(dojo: Dojo.find(params[:dojoId]), :created_at => @start_date..@end_date)
    render 'showStudent'
  end

  def editStudentPage
    @dojos = Dojo.all
    @student = Student.find(params[:studentId])
    @dojo = Dojo.find(params[:dojoId])
    render 'editStudent'
  end

  def submitEdit
    @student = Student.find(params[:studentId])
    @student.update(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], dojo:Dojo.find(params[:dojo]))
    @student.save
    redirect_to "/dojos/#{@student.dojo.id}"
  end

  def delete
    @dojo = Dojo.find(params[:dojoId])
    @student = Student.find(params[:studentId])
    @student.delete
    redirect_to "/dojos/#{@dojo.id}"
  end
end
