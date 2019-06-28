import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ 'color': `white` }} to={props.to}>{props.children}</Link>
  </li>
);

export default props => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
)
