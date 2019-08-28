import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Song from './Song';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/song/:id' component={Song} />
    </Switch>
  </BrowserRouter>
);

export default Router;
