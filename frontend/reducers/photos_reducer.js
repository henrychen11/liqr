import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
} from '../actions/photo_actions';

import { RECEIVE_PHOTO_ALBUM,   REMOVE_PHOTO_ALBUM } from '../actions/album_actions';

import { merge } from 'lodash';

const PhotoReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, action.photo );
    case REMOVE_PHOTO:
      newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_PHOTO_ALBUM:
      newState = merge({}, state);
      newState.albums.push(action.photoAlbum.album);
      return newState;
    case REMOVE_PHOTO_ALBUM:
      newState = merge({}, state);
      let removeIdx = null;
      newState.albums.forEach( (album, idx) => {
        if (album.id === action.photoAlbum.album.id) {
          removeIdx = idx;
        }
      });
      newState.albums.splice(removeIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default PhotoReducer;
