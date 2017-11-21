import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  console.log("hello", action.currentUser);

  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      return newState;

    default:
      return state;
  }
};


export default sessionReducer;
