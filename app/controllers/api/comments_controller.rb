class Api::CommentsController < ApplicationController
  
  def index
    @comments = Comment.where(photo_id: params[:photo_id]).includes(:author)
  end

  def show
    @comment = Comment.includes(:author).where(id: params[:id]).first
  end

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end


  def update
    @comment = current_user.comments.find_by(id: params[:id])

    if @comment && @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
