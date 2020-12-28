import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  addExperience,
} from './actions';

import GainProficiency from './GainProficiency';

export default function GainProficiencyContainer() {
  const dispatch = useDispatch();

  const { habitInfo, categoryInfo } = useSelector((state) => ({
    habitInfo: state.habitInfo,
    categoryInfo: state.categoryInfo,
  }))

  function handleClick() {
    dispatch(addExperience());
  };

  return (
    <GainProficiency 
    habitInfo={habitInfo}
    categoryInfo={categoryInfo}
    onClick={handleClick}
    />
  );
}
