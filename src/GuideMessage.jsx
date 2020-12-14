import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header({
  margin: '0 auto',
  width: '90%',
  textAlign: 'left',
});

const Intro = styled.div({
  margin: '2% auto',
  width: '90%',
  textAlign: 'left',
});

const Container = styled.div({
  margin: '13% 13% 5% 5%',
  width: '90%',
  fontSize: '1.4em',
  lineHeight: '1.6em',
  textAlign: 'center',
});

export default function GuideMessage() {
  return (
    <div>
      <Header>
        <h1>습관 생성중...</h1>
      </Header>
      <Intro>
        <h3>Flexible은 탄력적 습관 형성을 추구합니다.</h3>
      </Intro>
      <Container>
        <p>유연하지 못한 계획은 쉽게 깨집니다.<br></br>그 날의 기분과 컨디션에 따라 최적의 옵션을 선택하세요.</p>
      </Container>
    </div>
  );
}
