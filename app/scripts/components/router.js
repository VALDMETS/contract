import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

import Reader from './reader';
import Popup from './popup';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={Reader}>
      <Route path="confirm" component={Popup}/>
    </Route>
  </Router>
);

export default router;
