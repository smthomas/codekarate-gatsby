import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import QuizButton from "../QuizButton";
import { colors, sizes, container } from '../../styles';

const slideStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
`;

const heroTitleStyle = css`
  color: ${colors.white};
  font-size: ${sizes.xxxl};
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
`;

const heroSubtitleStyle = css`
  color: ${colors.white};
  font-size: ${sizes.xl};
  padding-top: 20px;
`;

const buttonWrapperStyle = css`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const slides = [
  ({ style, clickHandler }) => (//0
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Do you want to learn more about Drupal, GatsbyJS, and other Website development topics?</h1>
        <div css={buttonWrapperStyle}>
          <QuizButton title="Yes" value="1" onButtonClick={clickHandler} />
          <QuizButton title="No" value="99" onButtonClick={clickHandler} />
          <QuizButton title="Convince Me" value="99" onButtonClick={clickHandler} />
        </div>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//1
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>What are you looking to learn more about?</h1>
        <div css={buttonWrapperStyle}>
          <QuizButton title="GatsbyJS" value="2" onButtonClick={clickHandler} />
          <QuizButton title="Drupal" value="6" onButtonClick={clickHandler} />
          <QuizButton title="All of it!" value="99" onButtonClick={clickHandler} />
        </div>
        <span onClick={clickHandler}>Start Over</span>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//2
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Do you have any experience with GatsbyJS?</h1>
        <div css={buttonWrapperStyle}>
          <QuizButton title="Nope" value="3" onButtonClick={clickHandler} />
          <QuizButton title="A little" value="4" onButtonClick={clickHandler} />
          <QuizButton title="I'm an expert" value="5" onButtonClick={clickHandler} />
        </div>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//3
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Great! Code Karate can help you get started with GatsbyJS</h1>
        <h2 css={heroSubtitleStyle}>Enter your email to receive a starter GatsbyJS course. It covers all of the basics to help you get started building your first site.</h2>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//4
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>There is always more to learn</h1>
        <h2 css={heroSubtitleStyle}>There is a bunch of GatsbyJS material on CodeKarate.com for you to look over. If you want more hands on help, enter your email to receive a GatsbyJS course in your inbox</h2>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//5
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Perhaps you can teach me a thing or two?</h1>
        <h2 css={heroSubtitleStyle}>There is a bunch of GatsbyJS material on CodeKarate.com that you can continue learning from. Who knows, you might see things I should be doing differently! If so, don't hesitate to let me know.</h2>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//6
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>What version of Drupal do you want to learn more about?</h1>
        <div css={buttonWrapperStyle}>
          <QuizButton title="Drupal 7" value="7" onButtonClick={clickHandler} />
          <QuizButton title="Drupal 8" value="8" onButtonClick={clickHandler} />
        </div>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//7
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Awesome! Code Karate can help you learn Drupal 7</h1>
        <h2 css={heroSubtitleStyle}>Enter your email to receive a complete Drupal 7 course. It covers all of the basics to help you get started building your first Drupal 7 site.</h2>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//8
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Nice! Code Karate can help you get started with Drupal 8</h1>
        <h2 css={heroSubtitleStyle}>Code Karate has some videos on using various Drupal 8 modules. There are some more comprehensive courses in the works. Enter your email to stay up to date on all the Drupal 8 material</h2>
      </div>
    </animated.div>
  ),
  ({ style, clickHandler }) => (//9
    <animated.div style={{ ...style }}>
      <div css={slideStyle}>
        <h1 css={heroTitleStyle}>Nice! Code Karate can help you get started with Drupal 8</h1>
        <h2 css={heroSubtitleStyle}>Code Karate has some videos on using various Drupal 8 modules. There are some more comprehensive courses in the works. Enter your email to stay up to date on all the Drupal 8 material</h2>
      </div>
    </animated.div>
  ),
];

const HeroQuiz = () => {
  const heroStyle = css`
    padding: 80px;
    text-align: center;
    background-color: ${colors.red};
    color: ${colors.white};
    height: 500px;
  `;

  const [index, set] = useState(0);
  //const onClick = (value) => console.log(`Value fired ${value}`);
  const onClick = (value) => set(value);
  //const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  //const onClick = (value) => useCallback(() => set(state => (state + 1) % 3), []);
  //const onClick = useCallback((value = 0) => ();

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div css={heroStyle} className="simple-trans-main">
      <div css={container.textOnly}>
        {transitions.map(({ item, props, key }) => {
          const Slide = slides[item]
          return <Slide key={key} style={props} clickHandler={onClick} />
        })}
      </div>
    </div>
  )
};

export default HeroQuiz;
