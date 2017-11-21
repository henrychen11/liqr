import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { errors: [] });

    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, { errors: action.errors.responseJSON });

    default:
      return state;
  }
};


export default sessionErrorReducer;
