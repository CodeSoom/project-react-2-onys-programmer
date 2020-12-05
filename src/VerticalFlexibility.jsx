import React from 'react';

export default function VerticalFlexibility({ categoryInfo }) {
  
  const { category1, category2, category3 } = categoryInfo[0];

  return (
    <>
      <h1>매일 운동하기</h1>
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
