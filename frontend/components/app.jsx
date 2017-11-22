import React from 'react';
import WelcomeContainer from './Welcome/WelcomeContainer';
import NavBarContainer from './navbar/NavBarContainer';
import { Route } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer';

const App = () => (
  <div>
    <main>
      <NavBarContainer />
      <AuthRoute exact path="/" component={WelcomeContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </main>

  <footer>
    <Footer />
  </footer>
</div>
);

export default App;
