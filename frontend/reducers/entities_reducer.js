import { combineReducers } from 'redux';
import PhotoReducer from './photos_reducer';
import AlbumReducer from './albums_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  albums: AlbumReducer
});

export default EntitiesReducer;


// {albums.map(album => (
//     <Image key={ album.id } className="photo-show-image" publicId={ album.album_cover_url } cloudName="liquidpineapple" />
//   )
// )}
