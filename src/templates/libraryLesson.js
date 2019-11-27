import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import { container } from '../styles';

const LibraryLesson = ({ data }) => {
  const lesson = data.nodeLearningLibrary;

  const contentStyle = css`
    padding: 20px 15px 50px 15px;
  `;

  return (
    <Layout>
      <Helmet
        title={`${lesson.title} - Code Karate`}
        meta={[
          { name: 'description', content: lesson.title },
        ]}
      />
      <div css={[container.textOnly, contentStyle]}>
        <h1>{lesson.title}</h1>
        {lesson.relationships.media.field_media_oembed_video && (
          <span>{lesson.relationships.media.field_media_oembed_video}</span>
        )}
        {lesson.subtitle && (
          <h4>{lesson.subtitle}</h4>
        )}

        <div
          dangerouslySetInnerHTML={{ __html: lesson.body.processed }}
        />

        <p>Full Text Goes Here (if it exists)</p>
        <p>Tags go here with links, if it's part of a series it should go here too</p>
      </div>
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
      subtitle
      body {
        processed
      }
      relationships {
        media {
          field_media_oembed_video
        }
        learning_library_type {
          name
        }
        preview_image {
          field_image {
            alt
          }
          name
          relationships {
            field_image {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;

export default LibraryLesson;
