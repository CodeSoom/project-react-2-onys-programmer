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
import InputHabitPage from './InputHabitPage';

export default function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/guide" component={GuidePage} />
          <Route exact path="/guide/inputname" component={InputNamePage} />
          <Route path="/guide/inputhabit" component={InputHabitPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
}
