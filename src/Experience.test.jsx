import React from 'react';

import { render } from '@testing-library/react';

import Experience from './Experience';

test('Experience', () => {
  const status = {
    level: 1,
    experience: 0,
  }

  const { queryByText, queryByRole } = render((
    <Experience
      status={status}
    />
  ));

  expect(queryByText(/LV/)).not.toBeNull();
  expect(queryByRole('experienceBar')).not.toBeNull();
});