const initialState = {
  habitInfo: [],
  habit: {
    userName: '',
    objectHabit: '',
  }
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
  }
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}