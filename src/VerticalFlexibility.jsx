import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header({
  margin: '2% 2% 0 2%',
  width: '96%',
  textAlign: 'left',
})

const Intro = styled.div({
  margin: '0 auto',
  width: '96%',
  fontSize: '0.95em',
  textAlign: 'left',
});

const Buttons = styled.div({
  margin: '2% auto',
  Width: '15%',
  textAlign: 'center',
})

export default function VerticalFlexibility({ habitInfo, categoryInfo }) {
  const { userName, objectHabit } = habitInfo[0];

  const { category1, category2, category3 } = categoryInfo[0];

  return (
    <>
      <Header>
        <h1>{userName}님이 갖게 될 습관은 매일 {objectHabit}입니다!</h1>
      </Header>
      <Intro>
        <h2>수직적 유연성 확보하기!</h2>
      </Intro>
      <Buttons>
        {category1}
        {' '}|{' '}
        {category2}
        {' '}|{' '}
        {category3}
      </Buttons>
    </>
  );
}
