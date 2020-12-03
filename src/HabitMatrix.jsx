import React from 'react';
import CategoryForm from './CategoryForm';

export default function HabitMatrix({ habitInfo }) {
  const { userName, objectHabit } = habitInfo[0];

  return (
    <>
    <div>
      <h1>{userName}님이 갖게 될 습관은 {objectHabit}입니다!</h1>
    </div>
    <CategoryForm />
    </>
  )
}