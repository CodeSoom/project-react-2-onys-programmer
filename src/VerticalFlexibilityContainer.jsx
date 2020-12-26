import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addExperience } from './actions';

import VerticalFlexibility from './VerticalFlexibility';

export default function VerticalFlexibilityContainer() {
  const { habitInfo, categoryInfo } = useSelector((state) => ({
    habitInfo: state.habitInfo,
    categoryInfo: state.categoryInfo,
  }))

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addExperience);
  };

  return (
    <VerticalFlexibility 
    habitInfo={habitInfo}
    categoryInfo={categoryInfo}
    onClick={handleClick}
    />
  );
}
