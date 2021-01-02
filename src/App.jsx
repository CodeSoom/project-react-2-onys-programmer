import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './HomePage';
import GreetPage from './GreetPage';
import HabitCreateContainer from './HabitCreateContainer';
import CategoryCreateContainer from './CategoryCreateContainer';
import GainProficiencyContainer from './GainProficiencyContainer';
import NotFoundPage from './NotFoundPage';

export default function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/greet" component={GreetPage} />
        <Route exact path="/habit-create" component={HabitCreateContainer} />
        <Route exact path="/horizontal-flexibility" component={CategoryCreateContainer} />
        <Route exact path="/gain-proficiency" component={GainProficiencyContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
