import React from 'react';

import { render } from '@testing-library/react';

import CategoryForm from './CategoryForm';


test('CategoryForm', () => {
  const { queryByText } = render((
  <CategoryForm />
  ));

  expect(queryByText(/수평적 유연성/)).not.toBeNull();
  expect(queryByText(/입력/)).not.toBeNull();
});