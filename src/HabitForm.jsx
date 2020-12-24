import React from 'react';

import styled from '@emotion/styled';

import GuideMessage from './GuideMessage';

import { Link } from 'react-router-dom';

const Inputs = styled.div({
  margin: '2% 0 auto',
  height: '500',
  width: '300',
  textAlign: 'center',
})

export default function HabitForm({ habit, onChange, onClick }) {

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <GuideMessage />
      <Inputs>
        <input
          type="text"
          name="userName"
          placeholder="이름을 입력해주세요!"
          value={habit.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="objectHabit"
          placeholder="목표 습관은 무엇인가요?"
          value={habit.objectHabit}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={onClick}
        ><Link to="horizontal-flexibility">
            입력
          </Link></button>
      </Inputs>
    </div>
  )
} 