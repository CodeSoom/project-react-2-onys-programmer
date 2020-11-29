import React from 'react';

import GuideMessage from './GuideMessage';

import { render } from '@testing-library/react';

test('GuideMessage', () => {
  const { queryByText } = render((
    <GuideMessage />
  ));

  expect(queryByText(/생성중/)).not.toBeNull();
});