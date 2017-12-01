import { combineReducers } from 'redux';
import sessionErrorReducer from './session_errors_reducer';
import albumErrorReducer from './album_errors_reducer';
import commentErrorReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorReducer,
  albums: albumErrorReducer,
  comments: commentErrorReducer
});

export default errorsReducer;
