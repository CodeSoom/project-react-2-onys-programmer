import React from 'react';

import context from 'jest-plugin-context';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

function renderApp({ path }) {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      habitInfo: [
        {
          userName: '',
          objectHabit: '',
        }
      ],
      habit: {
        userName: '',
        objectHabit: '',
      },
    }));
  });

  return (
    render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ))
  );
}

describe('App', () => {
  context('with path /', () => {
    it('renders homepage', () => {
      const { getByText } = renderApp({ path: '/' })

      expect(getByText('Flexible')).not.toBeNull();
    });
  })

  context('with path /greet', () => {
    it('renders greetpage', () => {
      const { getByText } = renderApp({ path: '/greet' })

      expect(getByText(/환영합니다/)).not.toBeNull();
    });
  });

  context('with path /habitcreate', () => {
    it('renders habit creating page', () => {
      const { getByPlaceholderText } = renderApp({ path: '/habitcreate' })

      expect(getByPlaceholderText(/목표 습관/)).not.toBeNull();
    });
  });

  context('with path /habitmatrix', () => {
    it('renders habit matrix page', () => {
      const { queryByText } = renderApp({ path: '/habitmatrix' })

      expect(queryByText(/님이 갖게 될 습관은/)).not.toBeNull();
    });
  });

  context('with path /guide/verticalflexibility', () => {
    it('renders verticalflexibility page', () => {
      const { getByText } = renderApp({ path: '/guide/verticalflexibility' })

      expect(getByText(/수직적 유연성 확보/)).not.toBeNull();
    });
  });

  context('with a path that is not exist', () => {
    it('renders not foundpage', () => {
      const { getByText } = renderApp({ path: '/anyPathThatIsNotExist' })

      expect(getByText(/not found/)).not.toBeNull();
    });
  });

});
