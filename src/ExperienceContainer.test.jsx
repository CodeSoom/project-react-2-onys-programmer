import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ExperienceContainer from './ExperienceContainer';

jest.mock('react-redux');

test('Experience', () => {
  useSelector.mockImplementation((selector) => ({
    status: {
      level: 1,
      experience: 0,
    },
  }));

  const { queryByText, queryByRole } = render((
    <ExperienceContainer />
    ));

    expect(queryByText(/LV/)).not.toBeNull();
    expect(queryByRole('experienceBar')).not.toBeNull();
});