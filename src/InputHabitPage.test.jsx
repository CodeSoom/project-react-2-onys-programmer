import React from 'react';

import { render } from '@testing-library/react';

import InputHabitPage from './InputHabitPage';

test('InputHabitPage', () => {

  const { getByText } = render((
    <InputHabitPage />
  ));

  expect(getByText('무엇을 습관으로 만들고 싶나요?')).not.toBeNull();
});
