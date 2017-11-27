import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

//rename to payload cuz album.album is very confusing
export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = (album) => ({
  type: REMOVE_ALBUM,
  album
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
