import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAlbum} from './util/album_api_util';
import {requestAlbum, createAlbum, updateAlbum} from './actions/album_actions';
import {requestPhoto, requestUserPhotos} from './actions/photo_actions';
import { fetchUserPhotos } from './util/photo_api_util';


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
  window.requestAlbum = requestAlbum;
  window.fetchAlbum = fetchAlbum;
  window.requestUserPhotos = requestUserPhotos;
  window.fetchUserPhotos = fetchUserPhotos;
  window.createAlbum = createAlbum;
  window.updateAlbum = updateAlbum;


  //
  ReactDOM.render(<Root store={store}/>, root);
});
