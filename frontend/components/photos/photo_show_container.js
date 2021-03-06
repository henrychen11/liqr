import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { selectAllPhotos } from  '../../reducers/selectors';
import { requestPhoto, editPhoto, destroyPhoto, requestAllPhotos } from '../../actions/photo_actions';
import { requestAlbums } from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import {  deletePhotoAlbums } from '../../actions/album_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.entities.photos,
    userAlbums: values(state.entities.albums),
    albums: values(state.entities.photos.albums),
    currentUser: state.session.currentUser,
    photoId: ownProps.match.params.photoId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  editPhoto: (photoId) => dispatch(editPhoto(photoId)),
  destroyPhoto: (photoId) => dispatch(destroyPhoto(photoId)),
  requestAlbums: (userId) => dispatch(requestAlbums(userId)),
  deletePhotoAlbums: (albumId, photoId) => dispatch(deletePhotoAlbums(albumId, photoId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
