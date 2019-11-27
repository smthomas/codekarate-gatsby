import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import LibraryPreview from "../components/LibraryPreview";
import Pager from "../components/Pager";
//import Hero from "../components/Hero";
import HeroQuiz from "../components/HeroQuiz";
import { container } from '../styles';
import htmlSubstr from '../utils/htmlSubstr';

const Library = ({ data, pageContext }) => {
  const articles = data.allNodeLearningLibrary.nodes;
  const { pageNumber } = pageContext;

  const contentStyle = css`
    padding: 20px 15px;
  `;

  return (
    <Layout>
      <SEO title="Code Karate - Learn GatsbyJS and Drupal Website Development Skills" />
      {pageNumber === 0 && (
        /* <Hero
          title="Do you want to learn more about Drupal, GatsbyJS, and other Website development topics?"
          subtitle="...then you have come to the right place"
        /> */
        <HeroQuiz />
      )}

      <div css={[container.textOnly, contentStyle]}>
        {pageNumber === 0 && (
          <h1>Code Karate Content Library</h1>
        )}
        {pageNumber > 0 && (
          <h1>Code Karate Content Library - Page {pageNumber+1}</h1>
        )}

        {articles.map(article => (
          <LibraryPreview
            key={article.id}
            title={article.title}
            path={article.path.alias}
            summary={htmlSubstr(article.body.processed, 0, 600)}
          />
        ))}
        <Pager pageContext={pageContext} />
      </div>
    </Layout>
  );
};

Library.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNodeLearningLibrary(
      sort: {fields: created, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        title
        created
        body {
          processed
        }
        path {
          alias
        }
      }
    }
  }
`;

export default Library;
