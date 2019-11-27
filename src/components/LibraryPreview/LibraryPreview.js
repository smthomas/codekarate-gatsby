import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LibraryPreview = ({ title, path, summary }) => {
  //summary = summary.substring(0, 600);

  return (
    <div>
      <Link to={path}>
        <h2>{title}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

LibraryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default LibraryPreview;
