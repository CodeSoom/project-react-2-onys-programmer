export function changeHabitField({ name, value }) {
  return {
    type: 'changeHabitField',
    payload: {
      name, 
      value,
    }
  };
}

export function setHabit() {
  return {
    type: 'setHabit',
  };
}

export function changeCategoryField({ name, value }) {
  return {
    type: 'changeCategoryField',
    payload: { 
      name, 
      value,
     },
  };
}

export function addCategories() {
  return {
    type: 'addCategories',
  };
}

export function setStatus() {
  return {
    type: 'setStatus',
  };
}

export function addExperience() {
  return {
    type: 'addExperience',
  };
}