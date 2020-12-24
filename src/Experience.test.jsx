import React from 'react';

import { render } from '@testing-library/react';

import Experience from './Experience';

test('Experience', () => {
  const { queryByText, queryByRole } = render((
    <Experience />
    ));

    expect(queryByText(/LV/)).not.toBeNull();
    expect(queryByRole('experienceBar')).not.toBeNull();
});