import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  let rootEl = document.getElementById('root');

  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
