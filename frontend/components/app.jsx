import React from 'react';
import WelcomeContainer from './Welcome/WelcomeContainer';
import { Route } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>liqr</h1>
      <WelcomeContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
