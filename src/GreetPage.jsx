import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Container = styled.div({
  margin: '5% auto',
  width: '60%',
  textAlign: 'center',
});

const Intro = styled.div({
  margin: '4% 0 auto',
  height: '500',
  width: '300',
  textAlign: 'center',
});

const Instruction = styled.div({
  margin: '4% 0 auto',
  height: '500',
  width: '300',
  textAlign: 'center',
});

const Button = styled.div({
  margin: '2% auto',
  Width: '15%',
  textAlign: 'center',
});

export default function GreetPage() {
  return (
    <>
    <Container>
      <h1>Flexible에 오신 것을 환영합니다!</h1>
    </Container>
    <Intro>
      <p>Flexible은 신개념 습관 형성 프로그램입니다.</p>
    </Intro>
    <Instruction>
      <p>인생이라는 게임에서, <b>습관</b>은 여러분의 강력한 패시브 스킬입니다</p>
    </Instruction>
    <Instruction>
      <p>습관을 만들고 매일 성장시키세요!</p>
    </Instruction>
    <Button>
      <button><Link to="/habit-create">튜토리얼 시작</Link></button>
    </Button>
    </>
  );
}
