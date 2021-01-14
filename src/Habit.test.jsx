import React from 'react';

import habit from '../fixtures/habit';

import { render } from '@testing-library/react';

import Habit from './Habit';

test('Habit', () => {
  const habitInfo = [
    habit,
  ];

  const { queryByText } = render((
      <Habit
      habitInfo={habitInfo}
      />
    ));

    expect(queryByText(/습관 이름/)).not.toBeNull();
    expect(queryByText(/운동하기/)).not.toBeNull();
});