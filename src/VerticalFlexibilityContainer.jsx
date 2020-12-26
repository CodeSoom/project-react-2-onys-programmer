import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  addExperience,
} from './actions';

import VerticalFlexibility from './VerticalFlexibility';

export default function VerticalFlexibilityContainer() {
  const dispatch = useDispatch();

  const { habitInfo, categoryInfo } = useSelector((state) => ({
    habitInfo: state.habitInfo,
    categoryInfo: state.categoryInfo,
  }))

  function handleClick() {
    dispatch(addExperience());
  };

  return (
    <VerticalFlexibility 
    habitInfo={habitInfo}
    categoryInfo={categoryInfo}
    onClick={handleClick}
    />
  );
}
