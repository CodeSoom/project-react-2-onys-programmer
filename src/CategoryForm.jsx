import React from 'react';

import ExerciseExample from './ExerciseExample';

export default function CategoryForm({ onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <h2>수평적 유연성 확보하기</h2>
        <h3>세 가지 카테고리를 정하세요</h3>
        <br></br>
        <p>하나의 습관에도 여러 카테고리가 있을 수 있습니다.</p>
        <ExerciseExample />
      </div>
      <div>
        <input
          type="text"
          name="category1"
          placeholder="종류 1"
          onChange={handleChange}
        />
        <a>---</a>
        <input
          type="text"
          name="category2"
          placeholder="종류 2"
          onChange={handleChange}
        />
        <a>---</a>
        <input
          type="text"
          name="category3"
          placeholder="종류 3"
          onChange={handleChange}
        />
        <button 
        type="button"
        onClick={onClick}>
          입력
        </button>
      </div>
    </>
  );
} 