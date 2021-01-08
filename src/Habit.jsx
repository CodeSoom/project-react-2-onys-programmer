import React from 'react';

import styled from '@emotion/styled';

import skillBook from './images/skillBook.jpeg';

const HabitImage = styled.div({
  margin: '4% 0 auto',
  height: '100',
  width: '300',
  textAlign: 'center',
})

export default function Habit() {
  return (
    <>
    <HabitImage>
      <img
        src={skillBook}
        width="225"
      />
    </HabitImage>
    </>
  );
}