class Api::PhotoAlbumsController < ApplicationController

  def show
    @photo_album = PhotoAlbum.where(id: params[:id]).first
    render :show
  end

  def create
    @photo_album = PhotoAlbums.new(photo_album_params)

    if @photo_album.save
      render :show
    else
      render json: @photo_album.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo_album = photo_albums.find_by(id: params[:id])
    @photo_album.destroy
    render :show
  end

  private

  def photo_album_params
    params.require(:photo_album).permit(:album_id, :photo_id)
  end

end
