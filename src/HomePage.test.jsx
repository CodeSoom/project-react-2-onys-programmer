import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {

const { getByText } = render((
  <HomePage />
));

  expect(getByText('Flexible')).not.toBeNull();
  expect(getByText('Get any habit successfully!')).not.toBeNull();
  expect(getByText('Get it started!')).not.toBeNull();
});
