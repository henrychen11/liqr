import { connect } from 'react-redux';
import { selectAllAlbums } from '../../reducers/selectors';
import { requestAlbums } from '../../actions/album_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import AlbumIndex from './album_index';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    albums: selectAllAlbums(state, state.session.currentUser.id),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestAlbums: (userId) => dispatch(requestAlbums(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
