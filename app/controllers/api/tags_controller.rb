class Api::TagsController < ApplicationController


  def index
    @tags = Tag.where(photo_id: params[:photo_id])
  end

  def show
    @tag = Tag.where(id: params[:id]).first
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end


end
