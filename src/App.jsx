import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GuidePage from './GuidePage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/guide" component={GuidePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
