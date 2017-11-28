import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { requestAlbum, createAlbum, updateAlbum, destroyAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  let album = { title: '',
                description: '',
                author_id: '',
                author_username: ''};
  let formType = 'new';

  if (ownProps.location.pathname.includes('edit')) {
    album = Object.assign({}, album, state.entities.albums[ownProps.match.params.albumId]);
    formType = 'edit';
  }
  // debugger
    return { album, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.location.pathname.includes('edit')) ? updateAlbum : createAlbum;

  return {
    action: (album) => dispatch(createAlbum(album)),
    requestAlbum: (albumId) => dispatch(requestAlbum(albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
