import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import NavBarContainer from './navbar/NavBarContainer';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import PhotoIndexContainer from './photos/photo_index_container';
import AlbumIndexContainer from './albums/album_container';
import PhotoShowContainer from './photos/photo_show_container';
import AlbumShowContainer from './albums/album_show_container';
import PhotoUserContainer from './photos/photo_user_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoFormContainer from './photos/photo_form_container';

import Footer from './bottom';

const App = () => (
  <div>

    <main>
      <NavBarContainer />
      <Route exact path="/" component={WelcomeContainer} />
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path="/photos/:photoId" component={PhotoShowContainer} />
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <ProtectedRoute exact path="/photos/new" component={PhotoFormContainer} />
        <ProtectedRoute exact path="/explore" component={PhotoIndexContainer} />
        <ProtectedRoute exact path="/home" component={PhotoUserContainer} />
        <ProtectedRoute path="/photos" component={PhotoIndexContainer} />
        <ProtectedRoute path="/albums" component={AlbumIndexContainer} />
      </Switch>
    </main>
      <Footer className="footer"/>

  </div>
);

export default App;
