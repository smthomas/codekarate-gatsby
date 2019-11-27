import React from "react";
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors, sizes, container } from '../../styles';

const Hero = ({ title, subtitle }) => {
  const heroStyle = css`
    padding: 80px;
    text-align: center;
    background-color: ${colors.red};
    color: ${colors.white};
  `;

  const heroTitleStyle = css`
    color: ${colors.white};
    font-size: ${sizes.xxxl};
  `;

  const heroSubtitleStyle = css`
    color: ${colors.white};
    font-size: ${sizes.xl};
    padding-top: 20px;
  `;

  return (
    <div css={heroStyle}>
      <div css={container.textOnly}>
        <h1 css={heroTitleStyle}>{title}</h1>
        {subtitle && (
          <h2 css={heroSubtitleStyle}>{subtitle}</h2>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
