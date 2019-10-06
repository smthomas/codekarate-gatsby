import React from 'react';
import { css } from '@emotion/core';

import Icon from '../../Icon';
import { colors } from '../../../styles';

const SocialLinks = props => {
  const containerStyle = css`
    width: 300px;
  `;
  const listStyle = css`
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin-bottom: 10px;
  `;
  const listItemStyle = css`
    padding-left: 15px;
  `;
  const iconStyle = css`
    color: ${colors.white};
    &:hover {
      color: ${colors.red};
    }
  `;

  return (
    <div css={containerStyle}>
      <ul css={listStyle}>
        <li css={listItemStyle}><a href="https://www.youtube.com/user/codekarate">
          <Icon css={iconStyle} icon={['fab', 'youtube']} size="2x" />
        </a></li>
        <li css={listItemStyle}><a href="https://twitter.com/codekarate">
          <Icon css={iconStyle} icon={['fab', 'twitter']} size="2x" />
        </a></li>
        <li css={listItemStyle}><a href="https://facebook.com/codekarate">
          <Icon css={iconStyle} icon={['fab', 'facebook']} size="2x" />
        </a></li>
        <li css={listItemStyle}><a href="https://linkedin.com">
          <Icon css={iconStyle} icon={['fab', 'linkedin']} size="2x" />
        </a></li>
      </ul>
    </div>
  );
}

export default SocialLinks;
