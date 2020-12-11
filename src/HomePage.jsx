import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import flexible_header from './images/flexible_header.png';

const Header = styled.header({
  margin: '0 auto',
  maxWidth: '40%',
  fontSize: '6em',
})

const Container = styled.body({
  margin: '0 auto',
  maxWidth: '30%',
})

const HeaderImage = styled.image({
  margin: '0 auto',
  maxWidth: '50%',
})

const Button = styled.div({
  margin: '0 auto',
  maxWidth: '15%',
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
        />
      </HeaderImage>
      <Button>
        <button><Link to="/greet">Get it started!</Link></button>
      </Button>
    </>
  );
}
