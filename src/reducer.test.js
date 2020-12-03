import context from 'jest-plugin-context';

import reducer from './reducer';

import {
  changeHabitField,
  setHabit,
  setCategories,
} from './actions'

describe('reducer', () => {

  describe('changeHabitField', () => {
    it('changes habit form', () => {
      const initialState = {
        habit: {
          userName: '',
          objectHabit: '',
        }
      }

      const state = reducer(initialState, changeHabitField({
        name: 'objectHabit',
        value: '운동하기',
      }))

      expect(state.habit.objectHabit).toBe('운동하기');
    });
  });

  describe('setHabit', () => {
    it('sets a habit into habitInfo and clears habit form', () => {
      const initialState = {
        habitInfo: [],
        habit: {
          userName: '사용자이름',
          objectHabit: '목표습관',
        }
      };

      const state = reducer(initialState, setHabit());

      expect(state.habitInfo).toHaveLength(1);
      expect(state.habit.userName).toBe('');
      expect(state.habit.objectHabit).toBe('');
    });
  });

  describe('setCategories', () => {
    it('sets categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '헬스장 가기' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  context('when previous state is undefined', () => {
    const initialState = {
      habitInfo: [],
      habit: {
        userName: '',
        objectHabit: '',
      },
      categories: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

});
