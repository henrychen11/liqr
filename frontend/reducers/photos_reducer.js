import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import { merge } from 'lodash';

const PhotoReducer = (state={}, action) =>{
  Object.freeze(state);
  debugger
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case REMOVE_PHOTO:
      newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotoReducer;
