import React from "react";
import { Global, css } from '@emotion/core';

import Header from "./Header";
import Footer from "./Footer";
import { globalStyles, colors } from '../../styles';

const Layout = ({ children }) => {
  const contentWrapperStyle = css`
    background-color: ${colors.white};
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <div css={contentWrapperStyle}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
