import React from 'react';
import { useSelector } from 'react-redux';

import Habit from './Habit';

export default function HabitContainer() {
  const { habitInfo } = useSelector((state) => ({
    habitInfo: state.habitInfo,
  }));

  return (
    <>
    <Habit 
    habitInfo={habitInfo}
    />
    </>
  );
}