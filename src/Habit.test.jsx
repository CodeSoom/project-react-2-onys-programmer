import React from 'react';

import { render } from '@testing-library/react';

import Habit from './Habit';

test('Habit', () => {
  const { queryByText } = render((
      <Habit />
    ));

    expect(queryByText(/습관 이름/)).not.toBeNull();
    expect(queryByText(/운동하기/)).not.toBeNull();
});