import React from 'react';

import { render } from '@testing-library/react';

import ExerciseExample from './ExerciseExample';


test('ExerciseExample', () => {
  const { queryByText, queryAllByText } = render((
  <ExerciseExample />
  ));

  expect(queryByText(/예를 들어/)).not.toBeNull();
  expect(queryAllByText(/운동/)).not.toBeNull();
});