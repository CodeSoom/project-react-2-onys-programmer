import React from 'react';

import styled from '@emotion/styled';

const Examples = styled.body({
  margin: '0 auto',
  width: '96%',
  fontSize: '0.95em',
  lineHeight: '1.4em',
  textAlign: 'center',
});

const Instruction = styled.body({
  margin: '5% 2% 1% 2%',
  width: '96%',
  fontSize: '1.25em',
  textAlign: 'center',
});

export default function ExerciseExample() {
  return (
    <>
      <Examples>
        <p>예) <b>독서</b> : 자기계발서 읽기 --- 영어원서 읽기 --- 소설 읽기</p>
        <p>예) <b>운동</b> : 헬스장 가기 --- 산책하기 --- 팔굽혀펴기</p>
        <p>예) <b>일찍 일어나기</b> : 일찍 자기 --- 일찍 일어나기 --- 숙면 환경 확보하기</p>
        <p>예) <b>코딩공부하기</b> : 공식 문서 읽기 --- 커밋하기 --- 코딩 메타학습 하기</p>
      </Examples>
      <Instruction>
        <p>습관을 다양한 세 종류로 나누어보세요</p>
      </Instruction>
    </>
  );
}