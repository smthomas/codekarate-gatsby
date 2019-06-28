import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import Youtube from '../Youtube/Youtube'

const ArticleTeaser = (props) => {
  return (
    <>
      <Link to={props.path_alias} {...props}><h2>{props.title}</h2></Link>
      {props.video && <Youtube video={props.video} />}
      <div className="bodyWrapper" dangerouslySetInnerHTML={{ __html: props.body }} />
      <Link to={props.path_alias} {...props}>View Post</Link>
    </>
  );
};

ArticleTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  path_alias: PropTypes.string.isRequired
};

export default ArticleTeaser;
