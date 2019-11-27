import React from "react"
import { useStaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import Menu from "../Menu";
import { container, colors, sizes } from '../../../styles';

const Header = props => {
  const wrapperStyle = css`
    height: 60px;
    background-color: ${colors.red};
    color: ${colors.white};
  `;
  const headerStyle = css`
    padding: 0;
  `;
  const logoStyle = css`
    margin: 5px 0;
    float: left;
  `;
  const titleStyle = css`
    float: left;
    margin-top: 20px;
    color: ${colors.white};
    font-size: ${sizes.l};
  `;

  const data = useStaticQuery(graphql`
    query {
      ckLogo: file(relativePath: { eq: "cklogowhite.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header css={wrapperStyle}>
      <div css={[headerStyle, container.max]}>
        <Link to="/">
          <Img
            css={logoStyle}
            fixed={data.ckLogo.childImageSharp.fixed}
            alt="Code Karate Logo"
            title="Code Karate Logo"
          />
          <h3 css={titleStyle}>Code Karate</h3>
        </Link>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
