import React from 'react';
// import WelcomeContainer from './Welcome/WelcomeContainer';
import NavBarContainer from './navbar/NavBarContainer';
import { Route } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <NavBarContainer />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
