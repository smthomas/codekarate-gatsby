import React from "react";
import { css } from '@emotion/core';

import { colors } from '../../styles';

const QuizButton = props => {
  const buttonStyle = css`
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.red};
    padding: 12px;
    border-radius: 5px;
    margin: 0 12px;

    &:hover {
      background-color: ${colors.darkgray};
      color: ${colors.white};
    }
  `;

  const handleClick = () => {
    props.onButtonClick(props.value);
  }

  return (
    <span css={buttonStyle} onClick={handleClick}>{props.title}</span>
  );
}

export default QuizButton;
