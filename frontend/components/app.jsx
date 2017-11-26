import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import NavBarContainer from './navbar/NavBarContainer';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './SessionFormContainer';
import PhotoIndexContainer from './photos/photo_index_container';
import AlbumIndexContainer from './albums/album_container';
import PhotoShowContainer from './photos/photo_show_container';
import AlbumShowContainer from './albums/album_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Upload from './photos/upload';
import Footer from './bottom';

const App = () => (
  <div>

    <main>
      <NavBarContainer />
      <Route exact path="/" component={WelcomeContainer} />
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/upload" component={Upload} />
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
        <ProtectedRoute path="/photos" component={PhotoIndexContainer} />
        <ProtectedRoute path="/albums/:albumId" component={AlbumShowContainer} />
        <ProtectedRoute path="/albums" component={AlbumIndexContainer} />
        <ProtectedRoute path="/photos/:photoId" component={PhotoShowContainer} />
      </Switch>
    </main>
      <Footer className="footer"/>

  </div>
);

export default App;


// <ProtectedRoute path="/albums/:albumId" component={AlbumShowContainer} />
