import React from 'react';

import context from 'jest-plugin-context';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import habit from '../fixtures/habit';
import categories from '../fixtures/categories';

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
        habit,
      ],
      habit,
      categoryInfo: [
        categories,
      ],
      categories,
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

  context('with path /habit-create', () => {
    it('renders habit creating page', () => {
      const { getByPlaceholderText } = renderApp({ path: '/habit-create' })

      expect(getByPlaceholderText(/목표 습관/)).not.toBeNull();
    });
  });

  context('with path /habit-matrix', () => {
    it('renders habit matrix page', () => {
      const { queryByText } = renderApp({ path: '/habit-matrix' })

      expect(queryByText(/님이 갖게 될 습관은/)).not.toBeNull();
    });
  });

  context('with path /horizontal-flexibility', () => {
    it('renders HorizontalFlexibilityContainer', () => {
      const { getByText } = renderApp({ path: '/horizontal-flexibility' })

      expect(getByText(/수평적 유연성/)).not.toBeNull();
    });
  });

  context('with path /vertical-flexibility', () => {
    it('renders verticalflexibility page', () => {
      const { getByText } = renderApp({ path: '/vertical-flexibility' })

      expect(getByText(/수직적 유연성/)).not.toBeNull();
    });
  });

  context('with a path that is not exist', () => {
    it('renders not foundpage', () => {
      const { getByText } = renderApp({ path: '/any-path-that-is-not-exist' })

      expect(getByText(/not found/)).not.toBeNull();
    });
  });

});
