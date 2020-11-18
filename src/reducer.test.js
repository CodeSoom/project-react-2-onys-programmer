import reducer from './reducer';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });
});
