class Api::PhotosController < ApplicationController
  def index
    # @photos = Photo.all
    # Need to filter by user id
    @photos = if params[:user_id]
                Photo.where(author_id: params[:user_id]).includes(:author)
              else
                Photo.all.includes(:author)
              end

    render :index
  end

  def show
    @photo = Photo.includes(:author, :albums).where(id: params[:id]).first
    if @photo
      render :show
    else
      render json: ['No matching photo'], status: 404
    end
  end

  def create
    @photo = current_user.photos.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])

    if @photo && @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :img_url)
  end

end
