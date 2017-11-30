import { connect } from 'react-redux';
import {requestPhotoComments, createComment, editComment, deleteComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { values } from 'lodash';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  comments: values(state.entities.comments),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestPhotoComments: (photoId) => dispatch(requestPhotoComments(photoId)),
  createComment: (comment, photoId) => dispatch(createComment(comment, photoId)),
  editComment: (comment) => dispatch(editComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
