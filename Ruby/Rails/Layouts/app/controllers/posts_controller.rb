class PostsController < ApplicationController
  layout 'three_column'
  def index
    @posts = Post.all
    @users = User.all
  end

  def create
    @post = Post.create(title:params[:title], content:params[:content], user:User.find(params[:user]))
    @post.save
    redirect_to '/posts'
  end
end
