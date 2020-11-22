import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GreetPage from './GreetPage';
import HabitCreateContainer from './HabitCreateContainer';
import NotFoundPage from './NotFoundPage';
import VerticalFlexibility from './VerticalFlexibility';

export default function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/greet" component={GreetPage} />
        <Route exact path="/habitcreate" component={HabitCreateContainer} />
        <Route path="/guide/verticalflexibility" component={VerticalFlexibility} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
