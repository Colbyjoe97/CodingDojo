class EventsController < ApplicationController
  def index
    @attendees = Attend.all
    @events = Event.all
    render 'index'
  end
  def show
    @comments = Comment.where(event: Event.find(params[:id]))
    @attendees = Attend.where(event: Event.find(params[:id]))
    @event = Event.find(params[:id])
    render 'show'
  end

  def edit
    @event = Event.find(params[:id])
    render 'edit'
  end

  def update
    @event = Event.find(params[:id])
    @event.update(user: current_user, name: params[:name], date: params[:date], location: params[:location], password: @user.password, password_confirmation: @user.password)
    if @event.valid?
      @event.save
      redirect_to '/events'
    else
      flash[:errors] = @event.errors.full_messages
      redirect_to :back
    end
  end

  def new
    @event = Event.new(user: current_user, name: params[:name], date: params[:date], location: params[:location])
    if @event.valid?
      @event.save
      redirect_to '/events'
    else
      flash[:eventErrors] = @event.errors.full_messages
      redirect_to :back
    end
  end

  def attend
    @attend = Attend.new(user: current_user, event: Event.find(params[:id]))
    if @attend.valid?
      @attend.save
      redirect_to '/events'
    else
      flash[:attendErrors] = @attend.errors.full_messages
      redirect_to :back
    end
  end

  def leave
    @event = Event.find(params[:id])
    @attend = Attend.find_by(event: @event, user: current_user)
    @attend.delete
    redirect_to :back
  end

  def destroy
    @event = Event.find(params[:id])
    @event.delete
    redirect_to :back
  end
end
