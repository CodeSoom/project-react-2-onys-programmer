import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import skillBook from './images/skillBook.jpeg';

const Header = styled.header({
  margin: '0 auto',
  width: '70%',
  fontSize: '6em',
  textAlign: 'center',
})

const Container = styled.div({
  margin: '0 auto',
  width: '60%',
  textAlign: 'center',
})

const HeaderImage = styled.div({
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
          src={skillBook}
          width="300"
        />
      </HeaderImage>
      <Button>
        <button><Link to="/greet">Get it started!</Link></button>
      </Button>
    </>
  );
}
