import React from "react";
import { Global, css } from '@emotion/core';

import Header from "./Header";
import Footer from "./Footer";
import { globalStyles, container, colors } from '../../styles';

const Layout = ({ children }) => {
  const contentWrapperStyle = css`
    background-color: ${colors.white};
  `;

  const contentStyle = css`
    padding: 20px 15px;
  `;
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <div css={contentWrapperStyle}>
        <div css={[container.textOnly, contentStyle]}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
