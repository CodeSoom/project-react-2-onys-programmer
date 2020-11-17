import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import InputHabitPage from './InputHabitPage';

test('InputHabitPage', () => {

  const { getByText } = render((
    <MemoryRouter>
      <InputHabitPage />
    </MemoryRouter>
  ));

  expect(getByText('무엇을 습관으로 만들고 싶나요?')).not.toBeNull();
});
