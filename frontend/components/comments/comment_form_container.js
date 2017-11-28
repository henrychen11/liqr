import { connect } from 'react-redux';
import {requestPhotoComments, createComment, editComment, destroyComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state) => ({
  comments: state.entities.comments
});

const mapDispatchToProps = (dispatch) => ({
  requestPhotoComments: (photoId) => dispatch(requestPhotoComments(photoId)),
  createComment: (comment) => dispatch(createComment(comment)),
  editComment: (comment) => dispatch(editComment(comment)),
  destroyComment: (commentId) => dispatch(destroyComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
