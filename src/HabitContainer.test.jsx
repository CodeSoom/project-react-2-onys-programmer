import React from 'react';

import { render } from '@testing-library/react';

import HabitContainer from './HabitContainer';

test('HabitContainer', () => {
  const {queryByText} = render((
      <HabitContainer />
    ));

  expect(queryByText(/습관 이름/)).not.toBeNull();  

});