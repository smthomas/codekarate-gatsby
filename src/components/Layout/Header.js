import React from "react"
import { Link } from "gatsby";
import Menu from "./Menu";

export default props => (
  <header style={{ marginBottom: `1rem`, backgroundColor: "red", color: "white" }}>
    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, color: `white` }}>Code Karate</h3>
      </Link>
      <Menu />
    </div>
  </header>
)
