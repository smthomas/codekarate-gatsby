import React from "react";
import PropTypes from "prop-types";
import { css } from '@emotion/core';
import { Link } from "gatsby";

import { container, colors } from '../../styles';
import Icon from '../Icon';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  const pagerWrapperStyle = css`
    text-align: center;
    padding: 40px 0;
    height: 60px;
  `;

  const pagerLeftStyle = css`
    float: left;
    padding: 10px 40px;
  `;
  const pagerRightStyle = css`
    float: right;
    padding: 10px 40px;
  `;

  return (
    <div css={pagerWrapperStyle}>
      {previousPagePath && (
        <span css={pagerLeftStyle}>
          <Link to={previousPagePath}><Icon icon="arrow-left" /> Previous Page</Link>
        </span>
      )}
      {nextPagePath && (
        <span css={pagerRightStyle}>
          <Link to={nextPagePath}>Next Page <Icon icon="arrow-right" /></Link>
          </span>
      )}
    </div>
  );
};

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pager;
