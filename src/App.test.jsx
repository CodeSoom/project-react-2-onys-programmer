import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

function renderApp({ path }) {
  return(
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

  context('with path /guide', () => {
    it('renders guidepage', () => {
      const { getByText } = renderApp({ path: '/guide' })

      expect(getByText(/환영합니다/)).not.toBeNull();
    });
  });

  context('with path /guide/inputname', () => {
    it('renders input name page', () => {
      const { getByText } = renderApp({ path: '/guide/inputname'})

      expect(getByText(/이름을 입력해주세요/)).not.toBeNull();
    });
  });

  context('with path /guide/inputhabit', () => {
    it('renders input habit page', () => {
      const { getByText } = renderApp({ path: '/guide/inputhabit'})

      expect(getByText(/무엇을 습관으로 만들고 싶나요?/)).not.toBeNull();
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
