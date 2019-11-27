import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const Course = ({ data }) => {
  const course = data.nodeCourse;

  return (
    <Layout>
      <Helmet
        title={`${course.title} - Code Karate`}
        meta={[
          { name: 'description', content: course.title },
        ]}
      />
      <h1>{course.title}</h1>
      <p>Lesson Video will go here</p>
      <p>Lesson List will go here</p>
    </Layout>
  );
};

Course.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($CourseId: String!) {
    nodeCourse(id: { eq: $CourseId }) {
      id
      title
      body {
        processed
      }
      course_code
      course_version
      relationships {
        course_lessons {
          ... on paragraph__video_lesson {
            id
            title
            video_length
          }
        }
      }
    }
  }
`;

export default Course;
