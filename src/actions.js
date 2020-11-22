export function changeHabitField({name, value}) {
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
