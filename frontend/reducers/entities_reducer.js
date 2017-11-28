import { combineReducers } from 'redux';
import PhotoReducer from './photos_reducer';
import AlbumReducer from './albums_reducer';
import CommentReducer from './comment_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  albums: AlbumReducer,
  comments: CommentReducer,
});

export default EntitiesReducer;
