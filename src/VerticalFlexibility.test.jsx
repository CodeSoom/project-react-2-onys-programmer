import React from 'react';

import { render } from '@testing-library/react';

import VerticalFlexibility from './VerticalFlexibility';

test('VerticalFlexibility', () => {

  const { getByText } = render((
      <VerticalFlexibility />
  ));

  expect(getByText(/수직적 유연성/)).not.toBeNull();
});
