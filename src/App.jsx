import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GuidePage from './GuidePage';
import NotFoundPage from './NotFoundPage';
import InputNamePage from './InputNamePage';

export default function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/guide" component={GuidePage} />
          <Route path="/guide/inputname" component={InputNamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
}
