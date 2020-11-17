import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GuidePage from './GuidePage';
import NotFoundPage from './NotFoundPage';

export default function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/guide" component={GuidePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
}
