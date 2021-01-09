import React from 'react';

import styled from '@emotion/styled';

import controller from './images/controller.jpg';

import { Link } from 'react-router-dom';

const Intro = styled.div({
  margin: '1% 2% auto',
  height: '500',
  width: '300',
  textAlign: 'left',
});

const Header = styled.div({
  margin: '5% 0 12% 0',
  width: '100%',
  textAlign: 'center',
});

const Container = styled.div({
  margin: '1% 5% auto',
  height: '500',
  width: '300',
  textAlign: 'center',
});

const Instruction = styled.div({
  margin: '1% 0 10% 0',
  height: '500',
  width: '300',
  textAlign: 'center',
});

const MainImage = styled.div({
  margin: '1% 0 auto',
  height: '100',
  width: '300',
  textAlign: 'center',
})

const Button = styled.div({
  margin: '1% auto',
  Width: '15%',
  textAlign: 'center',
});

export default function GreetPage() {
  return (
    <>
      <Intro>
        <p>Flexible은 신개념 습관 형성 프로그램입니다.</p>
      </Intro>
      <Header>
        <h1>Flexible에 오신 것을 환영합니다!</h1>
      </Header>
      <Container>
        <p>인생이라는 게임에서, <b>습관</b>은 여러분의 강력한 패시브 스킬입니다</p>
      </Container>
      <Instruction>
        <p>습관을 만들고 매일 성장시키세요!</p>
      </Instruction>
      <MainImage>
        <Link to="/habit-create"><img
          src={controller}
          width="280"
        /></Link>
      </MainImage>
      <Button>
        <p><Link to="/habit-create">인생의 컨트롤러</Link>는 준비되어있습니다.</p>
      </Button>
    </>
  );
}
