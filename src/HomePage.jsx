import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import flexible_header from './images/flexible_header.jpg';

const Header = styled.header({
  margin: '0 auto',
  width: '70%',
  fontSize: '6em',
  textAlign: 'center',
})

const Container = styled.body({
  margin: '0 auto',
  width: '60%',
  textAlign: 'center',
})

const HeaderImage = styled.body({
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

export default function HomePage() {
  return (
    <>
      <Header>
        Flexible
      </Header>
      <Container>
        <h3>Get any habit successfully!</h3>
      </Container>
      <HeaderImage>
        <img
          src={flexible_header}
          width="300"
        />
      </HeaderImage>
      <Button>
        <button><Link to="/greet">Get it started!</Link></button>
      </Button>
    </>
  );
}
