import React from 'react';

import { useSelector } from 'react-redux';

import VerticalFlexibility from './VerticalFlexibility';

export default function VerticalFlexibilityContainer() {
  const { habitInfo, categoryInfo } = useSelector((state) => ({
    habitInfo: state.habitInfo,
    categoryInfo: state.categoryInfo,
  }))

  return (
    <VerticalFlexibility 
    habitInfo={habitInfo}
    categoryInfo={categoryInfo}
    />
  );
}
