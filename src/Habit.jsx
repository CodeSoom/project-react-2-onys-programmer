import React from 'react';

import styled from '@emotion/styled';

import skillBook from './images/skillBook.jpeg';

const HabitImage = styled.div({
  margin: '4% 0 auto',
  height: '100',
  width: '300',
  textAlign: 'center',
});

const Container = styled.div({
  margin: '1% 0 auto',
  height: '100',
  width: '300',
  fontSize: '1.2em',
  textAlign: 'center',
});

export default function Habit({ habitInfo }) {
  const { objectHabit } = habitInfo[0];

  return (
    <>
      <HabitImage>
        <img
          src={skillBook}
          width="225"
        />
      </HabitImage>
      <Container>
        <p>습관 이름 : {objectHabit}</p>
      </Container>
    </>
  );
}