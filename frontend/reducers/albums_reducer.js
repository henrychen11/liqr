import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';
import { merge } from 'lodash';

import { RECEIVE_PHOTO } from '../actions/photo_actions';

const AlbumReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, state, action.albums);

    case RECEIVE_ALBUM:
      // debugger
      // const album = action.payload.album;
      return merge({}, action.album);
    case REMOVE_ALBUM:
      let newState = merge({}, state);
      delete newState[action.album.id];
      return newState;
    default:
      return state;
  }
};

export default AlbumReducer;
