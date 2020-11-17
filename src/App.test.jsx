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
