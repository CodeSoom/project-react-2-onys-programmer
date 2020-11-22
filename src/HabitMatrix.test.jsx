import React from 'react';

import { render } from '@testing-library/react';

import HabitMatrix from './HabitMatrix';

test('HabitMatrix', () => {

  const habitInfo = [
    {
      userName: '김태호', objectHabit: '운동하기',
    },
  ];

  const { queryByText } = render((
    <HabitMatrix 
    habitInfo={habitInfo}
    />
  ))

  expect(queryByText(/김태호/)).not.toBeNull();
  expect(queryByText(/님이 갖게 될 습관은/)).not.toBeNull();
  expect(queryByText(/김태호/)).not.toBeNull();

});