import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { requestAlbum } from '../../actions/album_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    album: state.entities.albums,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestAlbum: (albumId) => dispatch(requestAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
