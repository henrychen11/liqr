import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  const stateCopy = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, action.comments);
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return Object.assign({}, state, { [comment.id]: comment });
    case REMOVE_COMMENT:
      delete stateCopy[action.comment.id];
      return stateCopy;
    case RECEIVE_PHOTO:
      const comments = action.payload.comments.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
      }, {});
      return Object.assign({}, state, comments);
    default:
      return state;
  }
};

export default CommentReducer;
