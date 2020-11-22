import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import HabitForm from './HabitForm';

import {
  setHabit,
  changeHabitField,
} from './actions';

export default function HabitCreateContainer() {
  const dispatch = useDispatch();

  const { habit } = useSelector((state) => ({
    habit: state.habit,
  }));

  function handleClick() {
    dispatch(setHabit());
  }

  function handleChange({ name, value }) {
    dispatch(changeHabitField({ name, value }));
  }

  return (
    <>
      <HabitForm
        habit={habit}
        onChange={handleChange}
        onClick={handleClick} />
    </>
  )
} 