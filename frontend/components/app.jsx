import React from 'react';


import Home from './home/home';
import { Route } from 'react-router-dom';


export default () => (
  <div>

    <Route exact path="/" component={Home} />

  </div>
);
