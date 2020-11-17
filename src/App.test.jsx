import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  context('with path /', () => {
    it('renders homepage', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('Flexible')).not.toBeNull();
    });
  })

  context('with path /guide', () => {
    it('renders guidepage', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/guide']}>
          <App />
        </MemoryRouter>
      ));

      expect(getByText('환영합니다')).not.toBeNull();
    });
  });

  context('with path /guide/inputname', () => {
    it('renders input name page', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/guide/inputname']}>
          <App />
        </MemoryRouter>
      ));

      expect(getByText('이름을 입력해주세요')).not.toBeNull();
    });
  });

  context('with path /guide/inputhabit', () => {
    it('renders input habit page', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/guide/inputhabit']}>
          <App />
        </MemoryRouter>
      ));

      expect(getByText('무엇을 습관으로 만들고 싶나요?')).not.toBeNull();
    });
  });

  context('with path /guide/verticalflexibility', () => {
    it('renders verticalflexibility page', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/guide/verticalflexibility']}>
          <App />
        </MemoryRouter>
      ));

      expect(getByText(/수직적 유연성/)).not.toBeNull();
    });
  });

    context('with a path that is not exist', () => {
      it('renders not foundpage', () => {
        const { getByText } = render((
          <MemoryRouter initialEntries={['/anyPathThatIsNotExist']}>
            <App />
          </MemoryRouter>
        ));
  
        expect(getByText('not found')).not.toBeNull();
      });
  });

});
