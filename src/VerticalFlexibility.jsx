import React from 'react';

import styled from '@emotion/styled';

const Input = styled.input({
  width: '30%',
  height: '25vh',
})

export default function VerticalFlexibility() {
  return (
    <>
      <h1>매일 운동하기</h1>
      <h2>수직적 유연성 확보하기!</h2>
      <div>
        <label>가장 이상적인 옵션. Elite<br>
        </br>
        <Input type="text" placeholder="헬스장 가서 스트레칭 후 근력운동 후 유산소운동 후 스트레칭"></Input>
        </label>
        <button>입력</button>
      </div>
      <p></p>
      <div>
        <label>조금은 약한 옵션. Joyful<br>
        </br><Input type="text" placeholder="헬스장 가서 스트레칭 후 근력운동"></Input></label>
        <button>입력</button>
      </div>
      <p></p>
      <div>
        <label>무조건 달성할 수 있는 옵션. Flexible<br>
        </br><Input type="text" placeholder="집에서 스트레칭 1분"></Input></label>
        <button>입력</button>
      </div>
    </>
  );
}
