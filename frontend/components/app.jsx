import React from 'react';
import Welcome from './welcome/welcome';
import NavBarContainer from './navbar/NavBarContainer';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import PhotoIndexContainer from './photos/photo_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer';

const App = () => (
  <div>
    <NavBarContainer />
    <main>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
      </Switch>
    </main>

  <footer>
    <Footer />
  </footer>
</div>
);

export default App;
