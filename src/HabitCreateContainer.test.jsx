import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HabitCreateContainer from './HabitCreateContainer'
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');

test('HabitCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    habit: {
      userName: '김태',
      objectHabit: '운동하',
    },
  }))

  const { getByDisplayValue, queryByText } = render((
    <MemoryRouter>
      <HabitCreateContainer />
    </MemoryRouter>
  ))

  expect(getByDisplayValue('김태')).not.toBeNull();
  expect(getByDisplayValue('운동하')).not.toBeNull();

  fireEvent.change(getByDisplayValue('김태'), {
    target: { value: '김태호' },
  });

  expect(dispatch).toBeCalled();

  expect(queryByText('입력')).not.toBeNull();

  fireEvent.click(queryByText('입력'));

  expect(dispatch).toBeCalledWith({
    type: 'setHabit',
  });
});