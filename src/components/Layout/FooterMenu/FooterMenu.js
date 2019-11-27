import React from "react"
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors } from '../../../styles';

const FooterMenu = props => {
  const containerStyle = css`
    width: 300px;
  `;
  const linkStyle = css`
    display: block;
    color: ${colors.whiteFaded};
    padding: 5px 0 5px 10px;
    font-size: 18px;
    line-height: 1;
    &:hover {
      color: ${colors.white};
    }
  `;
  const headerStyle = css`
    color: ${colors.white};
    margin-top: 0px;
    margin-bottom: 10px;
  `;
  const listStyle = css`
    padding: 0;
    margin: 0;
    list-style-type: none;
  `;

  return (
    <div css={containerStyle}>
      <h3 css={headerStyle}>{props.title}</h3>
      <ul css={listStyle}>
        {props.menuItems.map((menuItem, i) => {
          return <li key={i}><Link css={linkStyle} to={menuItem.link}>{menuItem.title}</Link></li>
        })}
      </ul>
    </div>
  );
}

export default FooterMenu;
