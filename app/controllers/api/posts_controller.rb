class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render :json => @post.errors.full_messages, :status => :unprocessable_entity
    end

  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def index
    @posts = Post.all
    render :index
  end



  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render :json => @post.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def new
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:id, :title, :body)
  end
end
