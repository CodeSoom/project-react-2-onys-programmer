import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import GreetPage from './GreetPage';

test('GreetPage', () => {

  const { getByText } = render((
    <MemoryRouter>
      <GreetPage />
    </MemoryRouter>
  ));

  expect(getByText('Flexible에 오신 것을 환영합니다!')).not.toBeNull();
  expect(getByText('Flexible은 신개념 습관 형성 프로그램입니다.')).not.toBeNull();
  expect(getByText(/튜토리얼/)).not.toBeNull();
});
