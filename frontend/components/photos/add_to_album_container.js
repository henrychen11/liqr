import { connect } from 'react-redux';
import { values } from 'lodash';
import AddToAlbum from './add_to_album';
import { createPhotoAlbums, deletePhotoAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPhotoAlbums: (photoAlbum) => dispatch(createPhotoAlbums(photoAlbum)),
  deletePhotoAlbums: (photoAlbumId) => dispatch(deletePhotoAlbums(photoAlbumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToAlbum);
