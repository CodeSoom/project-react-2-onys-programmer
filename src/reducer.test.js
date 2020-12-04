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

  describe('changeCategoryField', () => {
    it('changes each category form', () => {
      const initialState = {
        categories: { 
          category1: '',
          category2: '',
          category3: '',
        }
      };

      const state = reducer(initialState, changeHabitField({
        name: 'category1',
        value: '산책하기',
      }));

      expect(state.categories.category1).toBe('산책하기');
    });
  });

  describe('addCategories', () => {
    it('adds categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { categoryId: 1, categoryName: '산책하기' },
        { categoryId: 2, categoryName: '헬스장 가기' },
        { categoryId: 3, categoryName: '팔굽혀펴기' },
      ];

      const state = reducer(initialState, addCategories(categories));

      expect(state.categories).toHaveLength(3);
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
