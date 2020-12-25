const initialState = {
  habitInfo: [],
  habit: {
    userName: '',
    objectHabit: '',
  },
  categoryInfo: [],
  categories: {
    category1: '',
    category2: '',
    category3: '',
  },
  status: {
    level: 1,
    experience: 0,
  },
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

  changeCategoryField(state, { payload: { name, value } }) {
    return {
      ...state,
      categories: {
        ...state.categories,
        [name]: value,
      }
    };
  },

  addCategories(state) {
    const { categoryInfo, categories } = state;
    return {
      ...state,
      categoryInfo: [...categoryInfo, categories],
      categories: {
        category1: '',
        category2: '',
        category3: '',
      }
    };
  },

  setStatus(state) {
    const { status } = state;
    return {
      ...state,
      status: {
        ...status,
      },
    };
  },

  addExperience(state) {
    const { experience } = state;
    return {
      ...state,
      status: {
        ...status,
        experience: experience+1,
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}