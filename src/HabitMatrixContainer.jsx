import React from 'react';

import { useSelector } from 'react-redux';

import HabitMatrix from './HabitMatrix';

export default function HabitMatrixContainer() {
  const { habitInfo } = useSelector((state) => ({
    habitInfo: state.habitInfo,
  }))

  return(
    <>
    <HabitMatrix 
    habitInfo={habitInfo}/>
    </>
  )
}