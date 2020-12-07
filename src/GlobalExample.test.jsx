import React from 'react';

import { render } from '@testing-library/react';

import GlobalExample from './GlobalExample';


test('GlobalExample', () => {
  const { queryByText, queryAllByText } = render((
  <GlobalExample />
  ));

  expect(queryAllByText(/예/)).not.toBeNull();
  expect(queryByText(/독서/)).not.toBeNull();
  expect(queryByText(/운동/)).not.toBeNull();
});