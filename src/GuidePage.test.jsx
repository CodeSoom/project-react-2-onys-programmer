import React from 'react';

import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import GuidePage from './GuidePage';

test('GuidePage', () => {

  const { getByText } = render((
    <GuidePage />
  ));

  expect(getByText('Flexible에 오신 것을 환영합니다!')).not.toBeNull();
  expect(getByText('Flexible은 귀하의 발전에 최상의 assist를 제공하는 utility가 될 것입니다.')).not.toBeNull();
  expect(getByText('습관 생성 단계로')).not.toBeNull();
});
