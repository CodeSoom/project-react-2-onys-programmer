import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import HabitMatrixContainer from './HabitMatrixContainer';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');

test('HabitMatrixContainer', () => {

  useSelector.mockImplementation((selector) => selector({
    habitInfo: [
      {
        userName: '김태호', objectHabit: '운동하기',
      },
    ],
  }))

  const { queryByText } = render((
    <MemoryRouter>
      <HabitMatrixContainer />
    </MemoryRouter>
  ))

  expect(queryByText(/김태호/)).not.toBeNull();
  expect(queryByText(/님이 갖게 될 습관은/)).not.toBeNull();
  expect(queryByText(/김태호/)).not.toBeNull();
});
