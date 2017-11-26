import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchAlbums} from './util/album_api_util';
import {requestAlbums} from './actions/album_actions';
import {requestPhoto} from './actions/photo_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //Testing methods
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.currentUser = store.currentUser;
  window.requestPhoto = requestPhoto;
  window.requestAlbums = requestAlbums;
  //
  ReactDOM.render(<Root store={store}/>, root);
});
