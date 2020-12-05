import React from 'react';

import { useSelector } from 'react-redux';

import VerticalFlexibility from './VerticalFlexibility';

export default function VerticalFlexibilityContainer() {
  const { categoryInfo } = useSelector((state) => ({
    categoryInfo: state.categoryInfo,
  }))

  return (
    <VerticalFlexibility 
    categoryInfo={categoryInfo}
    />
  );
}
