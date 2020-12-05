import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import categories from '../fixtures/categories';

import { fireEvent, render } from '@testing-library/react';

import CategoryCreateContainer from './CategoryCreateContainer';

jest.mock('react-redux');

describe('CategoryCreateContainer', () => {
  it('changes category form', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      categories: 
      {
        category1: '산책하',
        category2: '헬스장 가',
        category3: '팔굽혀',
      }
    }))

    useDispatch.mockImplementation(() => dispatch);

    const { queryByPlaceholderText } = render((
      <CategoryCreateContainer />
    ))

    expect(queryByPlaceholderText('종류 1')).not.toBeNull();
    expect(queryByPlaceholderText('종류 2')).not.toBeNull();
    expect(queryByPlaceholderText('종류 3')).not.toBeNull();

    fireEvent.change(queryByPlaceholderText('종류 1'), {
      target: { value: '산책하기' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeCategoryField',
      payload: {
        name: 'category1',
        value: '산책하기',
      }
    });
  });

  it('adds categories to state', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      categories,
    }))
    useDispatch.mockImplementation(() => dispatch);

    const { queryByText } = render((
      <CategoryCreateContainer />
    ))

    expect(queryByText('입력')).not.toBeNull();

    fireEvent.click(queryByText('입력'));

    expect(dispatch).toBeCalledWith({
      type: 'addCategories',
    });
  });
});