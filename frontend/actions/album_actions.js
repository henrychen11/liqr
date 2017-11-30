import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_PHOTO_ALBUM = 'RECEIVE_PHOTO_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';


export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

//rename to payload cuz album.album is very confusing
export const receiveAlbum = payload => ({
  type: RECEIVE_ALBUM,
  payload
});

export const removeAlbum = (album) => ({
  type: REMOVE_ALBUM,
  album
});

export const receivePhotoAlbum = (photoAlbum) => ({
  type: RECEIVE_PHOTO_ALBUM,
  photoAlbum
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});

export const clearErrors = (errros) => ({
  type: CLEAR_ALBUM_ERRORS
});

export const requestAlbums = (userId) => (dispatch) => (
  AlbumAPIUtil.fetchAlbums(userId)
  .then(albums => dispatch(receiveAlbums(albums)))
);

export const requestAlbum = (albumId) => (dispatch) => (
  AlbumAPIUtil.fetchAlbum(albumId)
  .then(album => dispatch(receiveAlbum(album)))
);

export const createAlbum = (album) => (dispatch) => (
  AlbumAPIUtil.createAlbum(album)
  .then(response => dispatch(receiveAlbum(response)))
);

export const updateAlbum = (album) => (dispatch) => (
  AlbumAPIUtil.updateAlbum(album)
  .then(response => dispatch(receiveAlbum(response)))
);

export const destroyAlbum = (albumId) => (dispatch) => (
  AlbumAPIUtil.deleteAlbum(albumId)
  .then(album => dispatch(removeAlbum(album)))
);

export const createPhotoAlbums = (photoAlbum) => dispatch => (
  AlbumAPIUtil.createPhotoAlbums(photoAlbum)
    .then(response => dispatch(receivePhotoAlbum(response)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deletePhotoAlbums = (photoAlbumId) => dispatch => (
  AlbumAPIUtil.deletePhotoAlbums(photoAlbumId)
    .then(response => dispatch(receivePhotoAlbum(response)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
