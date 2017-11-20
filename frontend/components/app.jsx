import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';

import navBarContainer from './nav_bar/nav_bar_container';
import signUpContainer from './session/signup_container';
import loginContainer from './session/login_container';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/" component={} />
    <Route path="/signup" component={signUpContainer} />
    <Route path="/login" component={loginContainer} />
  </div>
);

export default App;
