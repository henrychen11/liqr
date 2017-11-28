import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestPhotoComments = photoId => dispatch => (
  CommentAPIUtil.getPhotoComments(photoId).then(comments => dispatch(receiveComments(comments)))
);

export const requestComment = commentId => dispatch => (
  CommentAPIUtil.getComment(commentId).then(comment => dispatch(receiveComment(comment)))
);

export const createComment = (comment, photoId) => dispatch => (
  CommentAPIUtil.createComment(comment, photoId).then(newComment => dispatch(receiveComment(newComment)))
);

export const editComment = comment => dispatch => (
  CommentAPIUtil.patchComment(comment).then(newComment => dispatch(receiveComment(newComment)))
);

export const destroyComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment)))
);
