import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import { merge } from 'lodash';

const PhotoReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      debugger
      action.photo.albumIds = action.photo.albums.map(album => album.id);
      return merge({}, state, action.photo );
    case REMOVE_PHOTO:
      newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotoReducer;
