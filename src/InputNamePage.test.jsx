import React from 'react';

import { render } from '@testing-library/react';

import InputNamePage from './InputNamePage';

test('InputNamePage', () => {

  const { getByText } = render((
    <InputNamePage />
  ));

  expect(getByText('이름을 입력해주세요')).not.toBeNull();
});
