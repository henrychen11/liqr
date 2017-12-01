import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { requestAlbum, createAlbum, updateAlbum} from '../../actions/album_actions';
import { clearErrors } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  let album = { title: '',
                description: ''};
  let formType = 'new';

  if (ownProps.location.pathname.includes('edit')) {
    album = Object.assign({}, album, state.entities.albums[ownProps.match.params.albumId]);
    formType = 'edit';
  }
    return {
      album,
      formType,
      errors: state.errors.albums
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.location.pathname.includes('edit')) ? updateAlbum : createAlbum;

  return {
    action: (album) => dispatch(action(album)),
    requestAlbum: (albumId) => dispatch(requestAlbum(albumId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
