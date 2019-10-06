import React from "react";
import { Link } from "gatsby";
import { css } from '@emotion/core';

import { container, colors, sizes } from '../../styles';

const Button = props => {
  const buttonStyle = css`
    background-color: ${colors.white};
    color: ${colors.red};
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: ${colors.darkgray};
      color: ${colors.white};
    }
  `;

  return (
    <Link css={buttonStyle} to={props.to}>{props.children}</Link>
  );
}

export default Button;
