import { connect } from 'react-redux';
import {requestPhotoComments, createComment, editComment, destroyComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { values } from 'lodash';

const mapStateToProps = (state) => ({
  comments: values(state.entities.comments),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestPhotoComments: (photoId) => dispatch(requestPhotoComments(photoId)),
  createComment: (comment) => dispatch(createComment(comment)),
  editComment: (comment) => dispatch(editComment(comment)),
  destroyComment: (commentId) => dispatch(destroyComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
