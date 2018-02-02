import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import NavBarContainer from './navbar/NavBarContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import SessionFormContainer from './session/SessionFormContainer';
import PhotoIndexContainer from './photos/photo_index_container';
import AlbumIndexContainer from './albums/album_container';
import PhotoShowContainer from './photos/photo_show_container';
import AlbumShowContainer from './albums/album_show_container';
import PhotoUserContainer from './photos/photo_user_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoFormContainer from './photos/photo_form_container';
import AlbumFormContainer from './albums/album_form_container';

const App = () => (
  <div>

    <NavBarContainer />
    <main>
      <Switch>
        <AuthRoute exact path="/" component={WelcomeContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path="/photos/new" component={PhotoFormContainer} />
        <ProtectedRoute exact path="/albums/new" component={AlbumFormContainer} />
        <ProtectedRoute exact path="/photos/:photoId" component={PhotoShowContainer} />
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <ProtectedRoute exact path="/photos/:photoId/edit" component={PhotoFormContainer} />
        <ProtectedRoute exact path="/albums/:albumId/edit" component={AlbumFormContainer} />
        <ProtectedRoute exact path="/explore" component={PhotoIndexContainer} />
        <ProtectedRoute exact path="/home" component={PhotoUserContainer} />
        <ProtectedRoute exact path="/albums" component={AlbumIndexContainer} />
        <Route path="/" render={ () => <Redirect to="/login" />} />
      </Switch>
    </main>

  </div>
);

export default App;
