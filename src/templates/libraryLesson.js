import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { colors, mediaQueries, jsBreakpoints } from '../styles';
import Layout from '../components/Layout';

const LibraryLesson = ({ data }) => {
  const lesson = data.nodeLearningLibrary;

  return (
    <Layout>
      <Helmet
        title={`${lesson.title} - Code Karate`}
        meta={[
          { name: 'description', content: lesson.title },
        ]}
      />
      <h1>{lesson.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: lesson.body.processed }}
      />
    </Layout>
  );
};

LibraryLesson.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($LessonId: String!) {
    nodeLearningLibrary(id: { eq: $LessonId }) {
      id
      title
      body {
        processed
      }
    }
  }
`;
