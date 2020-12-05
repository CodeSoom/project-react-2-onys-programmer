import React from 'react';

import habit from '../fixtures/habit';
import categories from '../fixtures/categories';

import { render } from '@testing-library/react';

import VerticalFlexibility from './VerticalFlexibility';

test('VerticalFlexibility', () => {

  const habitInfo = [
    habit,
  ]
  const categoryInfo = [
    categories,
  ];

  const { queryByText } = render((
      <VerticalFlexibility
      habitInfo={habitInfo}
      categoryInfo={categoryInfo} 
      />
  ));

  expect(queryByText(/수직적 유연성/)).not.toBeNull();
  expect(queryByText(/운동하기/)).not.toBeNull();
  expect(queryByText(/산책하기/)).not.toBeNull();
  expect(queryByText(/헬스장 가기/)).not.toBeNull();
  expect(queryByText(/팔굽혀펴기/)).not.toBeNull();
});
