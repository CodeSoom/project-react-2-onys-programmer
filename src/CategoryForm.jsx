import React from 'react';

import styled from '@emotion/styled';

import HabitContainer from './HabitContainer';

import GlobalExample from './GlobalExample';

import { Link } from 'react-router-dom';

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

const Container = styled.div({
  margin: '5% auto',
  width: '96%',
  fontSize: '1.6em',
  textAlign: 'center',
});

const Instruction = styled.div({
  margin: '8% 2% 1% 2%',
  width: '96%',
  fontSize: '1.25em',
  textAlign: 'center',
});

const Inputs = styled.div({
  margin: '2% auto',
  height: '500',
  width: '300',
  textAlign: 'center',
});

export default function CategoryForm({ categories, onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <Header>
        <h2>수평적 유연성 확보하기</h2>
      </Header>
      <Intro>
        <h3>세 가지 카테고리를 정하세요</h3>
      </Intro>
      <Container>
        <p>축하합니다! 습관을 형성했습니다!</p>
      </Container>
      <HabitContainer />
      <Instruction>
        <p>습관을 다양한 세 종류로 나누어보세요</p>
      </Instruction>
      <Inputs>
        <input
          type="text"
          name="category1"
          placeholder="종류 1"
          value={categories.category1}
          onChange={handleChange}
        />
        <a>---</a>
        <input
          type="text"
          name="category2"
          placeholder="종류 2"
          value={categories.category2}
          onChange={handleChange}
        />
        <a>---</a>
        <input
          type="text"
          name="category3"
          placeholder="종류 3"
          value={categories.category3}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={onClick}
        >
          <Link to="gain-proficiency">
            입력
          </Link>
        </button>
      </Inputs>
      <GlobalExample />
    </>
  );
} 