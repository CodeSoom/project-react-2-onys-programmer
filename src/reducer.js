const initialState = {
  habitInfo: [],
  habit: {
    userName: '',
    objectHabit: '',
  },
  categories: [],
};

const reducers = {
  changeHabitField(state, { payload: { name, value } }) {
    return {
      ...state,
      habit: {
        ...state.habit,
        [name]: value,
      }
    };
  },

  setHabit(state) {
    const { habitInfo, habit } = state;
    return {
      ...state,
      habitInfo: [...habitInfo, habit],
      habit: {
        userName: '',
        objectHabit: '',
      },
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  }
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}