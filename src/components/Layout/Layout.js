import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => (
  <div>
    <Header />
    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
      {children}
    </div>
    <Footer />
  </div>
);
