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

export function setStatus(status) {
  return {
    type: 'setStatus',
    payload: {
      status,
    }
  };
}

export function addExperience() {
  return {
    type: 'addExperience',
  };
}

export function showModal() {
  return {
    type: 'showModal',
  };
}