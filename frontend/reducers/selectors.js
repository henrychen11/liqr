import {values} from 'lodash';

export const selectAllPhotos = (state) => {
  return values(state.entities.photos);
};

export const selectAllAlbums = (state, userId) => {
  let albums = values(state.entities.albums);
  // Only select albums if matches current user
  let userAlbums = albums.filter(album => album.author_id === parseInt(userId));
  return userAlbums;
  // return albums;
};
