import {values} from 'lodash';

export const selectAllPhotos = (state) => {
  return values(state.entities.photos);
};
