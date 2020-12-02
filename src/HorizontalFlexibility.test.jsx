import React from 'react';

import { render } from '@testing-library/react';

import HorizontalFlexibility from './HorizontalFlexibility';


test('HorizontalFlexibility', () => {
  const { queryByText } = render((
  <HorizontalFlexibility />
  ));

  expect(queryByText(/수평적 유연성/)).not.toBeNull();
  expect(queryByText(/입력/)).not.toBeNull();
});