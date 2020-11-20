import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {

  const { getByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(getByText('Flexible')).not.toBeNull();
  expect(getByText('Get any habit successfully!')).not.toBeNull();
  expect(getByText('Get it started!')).not.toBeNull();
});
