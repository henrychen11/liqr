import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { requestAlbum } from '../../actions/album_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums.album,
    photos: state.entities.albums.photos,
    currentUser: state.session.currentUser,
    albumId: ownProps.match.params.albumId
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestAlbum: (userId) => dispatch(requestAlbum(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
