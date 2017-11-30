class Api::PhotoAlbumsController < ApplicationController

  def show
    @photo_album = PhotoAlbum.where(id: params[:id]).first
    render :destroy
  end

  def create
    @photo_album = PhotoAlbum.new(photo_album_params)
    @album = Album.find(photo_album_params[:album_id])

    if @photo_album.save
      render :show
    else
      render json: @photo_album.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo_album = PhotoAlbum.find_by(album_id: params[:album_id], photo_id: params[:photo_id]).first
    debugger
    @album = Album.find(@photo_album.album_id)
    # @photo_album.destroy
    render :show
  end

  private

  def photo_album_params
    params.require(:photoAlbum).permit(:album_id, :photo_id)
  end

end
