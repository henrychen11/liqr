import { connect } from 'react-redux';
import {requestPhotoComments, createComment, editComment, deleteComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { values } from 'lodash';
import { withRouter } from 'react-router-dom';
import {  clearErrors } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: values(state.entities.comments),
  currentUser: state.session.currentUser,
  errors: state.errors.comments
});

const mapDispatchToProps = (dispatch) => ({
  requestPhotoComments: (photoId) => dispatch(requestPhotoComments(photoId)),
  createComment: (comment, photoId) => dispatch(createComment(comment, photoId)),
  editComment: (comment) => dispatch(editComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
