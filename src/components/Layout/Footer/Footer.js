import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import FooterMenu from '../FooterMenu';
import SocialLinks from '../SocialLinks';
import { colors, container } from '../../../styles';

const Footer = props => {
  const wrapperStyle = css`
    padding: 20px 0;
    background-color: ${colors.darkgray};
    display: flex;
  `;
  const footerStyle = css`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
    justify-content: space-between;
  `;
  const footerMenuWrapperStyle = css`
    display: flex;
  `;
  const footerSocialStyle = css`
    width: 300px;
    max-width: 100%;
  `;
  const footerImageStyle = css`
    display: flex;
    justify-content: flex-end;
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
    <footer css={wrapperStyle}>
      <div css={[footerStyle, container.max]}>
        <div css={footerMenuWrapperStyle}>
          <FooterMenu title='Sharpen Your Skills' menuItems={[
            { link: '/courses', title: 'Courses' },
            { link: '/library', title: 'Learning Library' },
            { link: '/podcast', title: 'Podcast' },
            { link: '/newsletter', title: 'Newsletter' }
          ]} />
          <FooterMenu title='About Code Karate' menuItems={[
            { link: '/about', title: 'About Us' },
            { link: '/pricint', title: 'Learning Library' },
            { link: '/stories', title: 'Stories' }
          ]} />
        </div>
        <div css={footerSocialStyle}>
          <SocialLinks />
          <div css={footerImageStyle}>
            <Img
              fixed={data.ckLogo.childImageSharp.fixed}
              alt="Code Karate Logo"
              title="Code Karate Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
