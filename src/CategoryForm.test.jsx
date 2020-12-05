import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoryForm from './CategoryForm';
import { MemoryRouter } from 'react-router-dom';


test('CategoryForm', () => {
  const categories = {
    category1: '산책하',
    category2: '헬스장 가',
    category3: '팔굽혀펴',
  };

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { queryByText, queryByPlaceholderText } = render((
    <MemoryRouter>
      <CategoryForm
        categories={categories}
        onChange={handleChange}
        onClick={handleClick}
      />
    </MemoryRouter>
  ));

  expect(queryByText(/수평적 유연성/)).not.toBeNull();
  expect(queryByPlaceholderText('종류 1')).not.toBeNull();
  expect(queryByPlaceholderText('종류 2')).not.toBeNull();
  expect(queryByPlaceholderText('종류 3')).not.toBeNull();

  fireEvent.change(queryByPlaceholderText('종류 1'), {
    target: { value: '산책하기' },
  });

  expect(handleChange).toBeCalledWith({
    name: 'category1',
    value: '산책하기',
  });

  expect(queryByText(/입력/)).not.toBeNull();

  fireEvent.click(queryByText('입력'));

  expect(handleClick).toBeCalled();
});