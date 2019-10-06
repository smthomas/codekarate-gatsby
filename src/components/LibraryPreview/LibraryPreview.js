import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

const LibraryPreview = ({ title, path, summary }) => (
  <div>
    <Link to={path}>
      <h2>{title}</h2>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: summary }} />
  </div>
);

LibraryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default LibraryPreview;
