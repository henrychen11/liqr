export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
import * as APIUtil from '../util/session_api_util';

///Regular function
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = (errros) => ({
  type: CLEAR_SESSION_ERRORS
});

///THUNK functions with a promise

export const login = (user) => dispatch => (
  APIUtil.login(user)
    .then(response => {
      dispatch(receiveCurrentUser(response));
      dispatch(clearErrors());
    },
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
    .then(response => {
      dispatch(receiveCurrentUser(response));
      dispatch(clearErrors());
    },
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
