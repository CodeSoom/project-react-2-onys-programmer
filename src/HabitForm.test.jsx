import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import HabitForm from './HabitForm'
import { MemoryRouter } from 'react-router-dom';

test('HabitForm', () => {
  const habit = {
    userName: '김태',
    objectHabit: '운동하',
  };

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByText } = render((
    <MemoryRouter>
      <HabitForm
        habit={habit}
        onChange={handleChange}
        onClick={handleClick}
      />
    </MemoryRouter>
  ))

  expect(getByDisplayValue('김태')).not.toBeNull();
  expect(getByDisplayValue('운동하')).not.toBeNull();

  fireEvent.change(getByDisplayValue('운동하'), {
    target: { value: '운동하기' },
  });

  expect(handleChange).toBeCalledWith({
    name: 'objectHabit',
    value: '운동하기',
  });

  expect(getByText('입력')).not.toBeNull();

  fireEvent.click(getByText('입력'));

  expect(handleClick).toBeCalled();
});