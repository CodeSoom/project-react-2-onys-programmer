import React from 'react';

import { useSelector } from 'react-redux';

import habit from '../fixtures/habit';

import { render } from '@testing-library/react';

import HabitContainer from './HabitContainer';

test('HabitContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    habitInfo: [
      habit,
    ],
  }));

  const {queryByText} = render((
      <HabitContainer />
    ));

  expect(queryByText(/습관 이름/)).not.toBeNull();
  expect(queryByText(/운동하기/)).not.toBeNull();
  
});