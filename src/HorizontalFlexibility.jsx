import React from 'react';

export default function HorizontalFlexibility() {
  return (
    <>
      <div>
        <h2>수평적 유연성 확보하기</h2>
        <h3>세 가지 카테고리를 정하세요</h3>
        <br></br>
        <p>하나의 습관에도 여러 카테고리가 있을 수 있습니다.</p>
        <p>예를 들어 운동에는 수많은 카테고리가 있죠.</p>
        <p>잠깐 새 탭을 눌러서 무슨 운동을 할 지 정하고 오세요.</p>
        <br></br>
        <p>예) 헬스장 가기 --- 산책하기 --- 팔굽혀펴기</p>
      </div>
      <div>
        <input
          type="text"
          name="category1"
        />
        <a>---</a>
        <input
          type="text"
          name="category2"
        />
        <a>---</a>
        <input
          type="text"
          name="category3"
        />
        <button>
          입력
        </button>
      </div>
    </>
  );
} 