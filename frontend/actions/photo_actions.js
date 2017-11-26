import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

//Regular actions
export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = (photo) => ({
  type: REMOVE_PHOTO,
  photo
});

export const requestAllPhotos = () => (dispatch) => (
  PhotoAPIUtil.fetchPhotos()
  .then(photos => dispatch(receivePhotos(photos)))
);

export const requestUserPhotos = (userId) => (dispatch) => (
  PhotoAPIUtil.fetchUserPhotos()
  .then(photos => dispatch(receivePhotos(photos)))
);

export const requestPhoto = (photoId) => (dispatch) => (
  PhotoAPIUtil.fetchPhoto(photoId)
  .then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = (photo) => dispatch => (
  PhotoAPIUtil.createPhoto(photo)
  .then(response => dispatch(receivePhoto(response)))
);

export const editPhoto = (photo) => (dispatch) => (
  PhotoAPIUtil.updatePhoto(photo)
  .then(response => dispatch(receivePhoto(response)))
);

export const destroyPhoto = (photoId) => dispatch => (
  PhotoAPIUtil.deletePhoto(photoId)
  .then(photo => dispatch(removePhoto(photo)))
);
