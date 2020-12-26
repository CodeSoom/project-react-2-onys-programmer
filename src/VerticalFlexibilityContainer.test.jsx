import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import habit from '../fixtures/habit';
import categories from '../fixtures/categories';

import { fireEvent, render } from '@testing-library/react';

import VerticalFlexibilityContainer from './VerticalFlexibilityContainer';

jest.mock('react-redux');

test('VerticalFlexibilityContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch)

  useSelector.mockImplementation((selector) => selector({
    habitInfo: [
      habit,
    ],
    habit,
    categoryInfo:[
      categories,
    ],
    categories,
    status: {
      level: 1,
      experience: 0,
    },
  }));

  const { queryByText } = render((
      <VerticalFlexibilityContainer />
  ));

  expect(queryByText(/수직적 유연성/)).not.toBeNull();
  expect(queryByText(/산책하기/)).not.toBeNull();
  expect(queryByText(/헬스장 가기/)).not.toBeNull();
  expect(queryByText(/팔굽혀펴기/)).not.toBeNull();

  fireEvent.click(queryByText(/산책하기/));

  expect(dispatch).toBeCalledWith({
    type: 'addExperience',
  });
});
