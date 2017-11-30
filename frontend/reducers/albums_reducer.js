import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';
import { merge } from 'lodash';

import { RECEIVE_PHOTO } from '../actions/photo_actions';

const AlbumReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, state, action.albums);

    case RECEIVE_ALBUM:
      let oldState = Object.assign({}, state);

      oldState.photos = action.payload.photos;

      newState = {[action.payload.album.id]: action.payload.album,
        album: action.payload.album.id
      };
      return merge({}, oldState, newState);

    case REMOVE_ALBUM:
      newState = merge({}, state);
      delete newState[action.album.id];
      return newState;
    default:
      return state;
  }
};

export default AlbumReducer;
