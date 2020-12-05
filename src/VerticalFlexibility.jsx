import React from 'react';

export default function VerticalFlexibility({ habitInfo, categoryInfo }) {
  const { objectHabit } = habitInfo[0];
  
  const { category1, category2, category3 } = categoryInfo[0];

  return (
    <>
      <h1>매일 {objectHabit}</h1>
      <h2>수직적 유연성 확보하기!</h2>
      <h3>
        {category1}
        {' '}|{' '}
        {category2}
        {' '}|{' '}
        {category3}
      </h3>
    </>
  );
}
