import React from 'react';

import { render } from '@testing-library/react';

import GlobalExample from './GlobalExample';


test('GlobalExample', () => {
  const { queryByText, queryAllByText } = render((
  <GlobalExample />
  ));

  expect(queryByText(/예를 들어/)).not.toBeNull();
  expect(queryAllByText(/운동/)).not.toBeNull();
});