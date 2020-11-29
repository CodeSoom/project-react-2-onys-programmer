import React from 'react';

import GuideMessage from './GuideMessage';

import { Link } from 'react-router-dom';

export default function HabitForm({ habit, onChange, onClick }) {
  
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <GuideMessage />
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
      >
        <Link to="habit-matrix">
          입력
        </Link> 
    </button>
    </div>
  )
} 