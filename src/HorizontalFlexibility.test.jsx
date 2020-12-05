import React from 'react';

import { useSelector } from 'react-redux';

import categories from '../fixtures/categories';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HorizontalFlexibility from './HorizontalFlexibility';

test('HorizontalFlexibility', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }))

  render
    (
      <MemoryRouter>
        <HorizontalFlexibility />
      </MemoryRouter>
    );
});