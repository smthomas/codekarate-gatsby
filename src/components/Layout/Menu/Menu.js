import React from "react";
import { Link } from "gatsby";
import { css } from '@emotion/core';

import Button from "../../Button";
import { colors, sizes } from '../../../styles';

const ListLink = props => {
  const listStyle = css`
    display: inline-block;
    margin-left: 20px;
  `;

  const linkStyle = css`
    color: ${colors.white};
    font-size: ${sizes.m};
  `;

  return (
    <li css={listStyle}>
      {props.button && (
        <Button to={props.to} color={props.button}>Sign Up</Button>
      )}
      {!props.button && (
        <Link css={linkStyle} to={props.to}>{props.children}</Link>
      )}
    </li>
  );
};

const Menu = props => {
  const menuStyle = css`
    list-style: none;
    float: right;
    margin-top: 16px;
  `;

  return (
    <ul css={menuStyle}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      <ListLink to="/" button="white">Sign Up</ListLink>
    </ul>
  );
}

export default Menu;
