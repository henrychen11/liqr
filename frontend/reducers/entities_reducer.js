import { combineReducers } from 'redux';
import PhotoReducer from './photos_reducer';
import AlbumReducer from './albums_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  albums: AlbumReducer
});

export default EntitiesReducer;
