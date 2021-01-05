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
        <h1>습관 생성중... 📔</h1>
      </Header>
      <Intro>
        <h3>Flexible은 탄력적 습관 형성을 추구합니다.</h3>
      </Intro>
      <Container>
        <p>갖고 싶은 습관이 무엇인가요?<br></br>가능한 포괄적으로 적어주세요.</p>
      </Container>
    </div>
  );
}
