import React from 'react';

import styled from '@emotion/styled';

import ExperienceContainer from './ExperienceContainer';

const Header = styled.header({
  margin: '2% 2% 0 2%',
  width: '96%',
  textAlign: 'left',
});

const Intro = styled.div({
  margin: '0 auto',
  width: '96%',
  fontSize: '0.95em',
  textAlign: 'left',
});

const Buttons = styled.div({
  margin: '2% auto',
  Width: '15%',
  textAlign: 'center',
});

const Button = styled.div({
  margin: '17% auto',
  Width: '15%',
  textAlign: 'center',
});

const ProgressBar = styled.div({
  margin: '0 auto',
  width: '50%',
  fontSize: '1.5em',
  textAlign: 'center',
});

export default function GainProficiency({ habitInfo, categoryInfo, onClick }) {
  const { userName, objectHabit } = habitInfo[0];

  const { category1, category2, category3 } = categoryInfo[0];

  return (
    <>
      <Header>
        <h1>{userName}님이 갖게 될 습관은 매일 {objectHabit}입니다!</h1>
      </Header>
      <Intro>
        <h2>습관의 숙련도를 올리세요!</h2>
      </Intro>
      <Buttons>
        <Button>
          <button
            type="button"
            onClick={onClick}
          >
            {category1}
          </button>
          ---
          <button
            type="button"
            onClick={onClick}
          >
            {category2}
          </button>
          ---
          <button
            type="button"
            onClick={onClick}
          >
            {category3}
          </button>
        </Button>
      </Buttons>
      <ProgressBar>
        <ExperienceContainer />
      </ProgressBar>
    </>
  );
}
