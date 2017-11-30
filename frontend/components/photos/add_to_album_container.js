import { connect } from 'react-redux';
import { values } from 'lodash';
import AddToAlbum from './add_to_album';
import { withRouter } from 'react-router-dom';
import { createPhotoAlbums, deletePhotoAlbums } from '../../actions/album_actions';
import {  clearErrors } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    photoId: ownProps.match.params.photoId,
    errors: state.errors.albums
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPhotoAlbums: (photoAlbum) => dispatch(createPhotoAlbums(photoAlbum)),
  deletePhotoAlbums: (photoAlbumId) => dispatch(deletePhotoAlbums(photoAlbumId)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToAlbum));
