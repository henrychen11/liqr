import { connect } from 'react-redux';
import PhotoShow from './photo_show';

import { requestPhoto, editPhoto, destroyPhoto } from './actions/photo_actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  editPhoto: (photoId) => dispatch(editPhoto(photoId)),
  destroyPhoto: (photoId) => dispatch(destroyPhoto(photoId))
});

export default connect(withRouter(mapStateToProps, mapDispatchToProps)(PhotoShow));
