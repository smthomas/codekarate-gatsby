import React from 'react'
import { css } from '@emotion/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSpinner, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faBars,
  faArrowRight,
  faArrowLeft,
);

const Icon = props => (
  <FontAwesomeIcon {...props} />
);

const loaderStyle = css`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Loading = () => (
  <FontAwesomeIcon css={loaderStyle} icon={faSpinner} size="3x" spin />
);

export { Loading };
export default Icon;
