import React from 'react';

import { useDispatch } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import CategoryCreateContainer from './CategoryCreateContainer';

jest.mock('react-redux');

test('CategoryCreateContainer', () => {
  const dispatch = jest.fn();
  const handleClick = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { queryByText } = render((
    <CategoryCreateContainer
    onClick={handleClick}
    />
  ))

  expect(queryByText('입력')).not.toBeNull();

  fireEvent.click(queryByText('입력'));

  expect(dispatch).toBeCalled();
});