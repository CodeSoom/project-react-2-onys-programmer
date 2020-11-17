import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import InputNamePage from './InputNamePage';

test('InputNamePage', () => {

  const { getByText } = render((
    <MemoryRouter>
      <InputNamePage />
    </MemoryRouter>
  ));

  expect(getByText('이름을 입력해주세요')).not.toBeNull();
});
