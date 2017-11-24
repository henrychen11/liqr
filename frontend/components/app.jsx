import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import NavBarContainer from './navbar/NavBarContainer';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import PhotoIndexContainer from './photos/photo_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Upload from './photos/upload';

const App = () => (
  <main>
    <NavBarContainer />
      <Route exact path="/" component={WelcomeContainer} />
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/upload" component={Upload} />
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
      </Switch>
    </main>
);

export default App;
