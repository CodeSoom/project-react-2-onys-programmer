import React from 'react';

import habit from '../fixtures/habit';
import categories from '../fixtures/categories';

import { fireEvent, render } from '@testing-library/react';

import GainProficiency from './GainProficiency';

test('GainProficiency', () => {

  const habitInfo = [
    habit,
  ]

  const categoryInfo = [
    categories,
  ];

  const handleClick = jest.fn();

  const { queryByText, queryByRole } = render((
    <GainProficiency
      habitInfo={habitInfo}
      categoryInfo={categoryInfo}
      onClick={handleClick}
    />
  ));

  expect(queryByText(/숙련도/)).not.toBeNull();
  expect(queryByText(/운동하기/)).not.toBeNull();
  expect(queryByText(/산책하기/)).not.toBeNull();
  expect(queryByText(/헬스장 가기/)).not.toBeNull();
  expect(queryByText(/팔굽혀펴기/)).not.toBeNull();

  fireEvent.click(queryByText(/산책하기/));

  expect(handleClick).toBeCalled();

  expect(queryByText(/LV/)).not.toBeNull();
  expect(queryByRole('experienceBar')).not.toBeNull();
});
