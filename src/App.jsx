import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GreetPage from './GreetPage';
import HabitCreateContainer from './HabitCreateContainer';
import HabitMatrixContainer from './HabitMatrixContainer';
import HorizontalFlexibility from './HorizontalFlexibility';
import VerticalFlexibility from './VerticalFlexibility';
import NotFoundPage from './NotFoundPage';

export default function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/greet" component={GreetPage} />
        <Route exact path="/habit-create" component={HabitCreateContainer} />
        <Route exact path="/habit-matrix" component={HabitMatrixContainer} />
        <Route exact path="/horizontal-flexibility" component={HorizontalFlexibility} />
        <Route exact path="/guide/vertical-flexibility" component={VerticalFlexibility} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
