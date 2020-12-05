import React from 'react';

import { useSelector } from 'react-redux';

import habit from '../fixtures/habit';
import categories from '../fixtures/categories';

import { render } from '@testing-library/react';

import VerticalFlexibilityContainer from './VerticalFlexibilityContainer';

jest.mock('react-redux');

test('VerticalFlexibilityContainer', () => {

  useSelector.mockImplementation((selector) => selector({
    habitInfo: [
      habit,
    ],
    habit,
    categoryInfo:[
      categories,
    ],
    categories,
  }));

  const { queryByText } = render((
      <VerticalFlexibilityContainer />
  ));

  expect(queryByText(/수직적 유연성/)).not.toBeNull();
  expect(queryByText(/산책하기/)).not.toBeNull();
  expect(queryByText(/헬스장 가기/)).not.toBeNull();
  expect(queryByText(/팔굽혀펴기/)).not.toBeNull();
});
