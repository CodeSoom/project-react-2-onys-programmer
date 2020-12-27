import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GreetPage from './GreetPage';
import HabitCreateContainer from './HabitCreateContainer';
import HorizontalFlexibility from './HorizontalFlexibility';
import VerticalFlexibilityContainer from './VerticalFlexibilityContainer';
import NotFoundPage from './NotFoundPage';

export default function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/greet" component={GreetPage} />
        <Route exact path="/habit-create" component={HabitCreateContainer} />
        <Route exact path="/horizontal-flexibility" component={HorizontalFlexibility} />
        <Route exact path="/vertical-flexibility" component={VerticalFlexibilityContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
