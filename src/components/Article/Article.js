import React from 'react';
import PropTypes from 'prop-types';
import Youtube from "../Youtube/Youtube";

const Article = (props) => (
  <>
    <h1>{props.title}</h1>
    <div>Tags:</div>
    <ul className="tags">{props.tags.map(item => {
      return (
        <li className="tag">{item.name}</li>
      )
    })}</ul>
    {props.series && <div className="series"><strong>Series: </strong>{props.series}</div>}
    {props.video && <Youtube video={props.video} />}
    {props.episode && <div className="episode" style={{ fontWeight: `bold` }}>Daily Dose of Drupal Episode #{props.series}</div>}
    <div className="bodyWrapper" dangerouslySetInnerHTML={{ __html: props.body }} />
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  video: PropTypes.string,
  tags: PropTypes.array,
  series: PropTypes.string,
  episode: PropTypes.string,
};

export default Article;
