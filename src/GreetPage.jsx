import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Container = styled.div({
  margin: '5% auto',
  width: '60%',
  textAlign: 'center',
})

const Intro = styled.div({
  margin: '4% 0 auto',
  height: '500',
  width: '300',
  textAlign: 'center',
})

const Button = styled.div({
  margin: '2% auto',
  Width: '15%',
  textAlign: 'center',
})

export default function GreetPage() {
  return (
    <>
    <Container>
      <h1>Flexible에 오신 것을 환영합니다!</h1>
    </Container>
    <Intro>
      <p>Flexible은 귀하의 발전에 최상의 assist를 제공하는 utility가 될 것입니다.</p>
    </Intro>
    <Button>
      <button><Link to="/habit-create">튜토리얼 시작</Link></button>
    </Button>
    </>
  );
}
