import { connect } from 'react-redux';
import { selectAllAlbums } from '../../reducers/selectors';
import { requestAlbums } from '../../actions/album_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import AlbumIndex from './album_index';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {

    albums: selectAllAlbums(state, ownProps.match.params.userId),
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  receiveCurrentUserAlbums: (userId) => dispatch(requestAlbums(userId)),
  receiveCurrentUser: (userId) => dispatch(receiveCurrentUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
