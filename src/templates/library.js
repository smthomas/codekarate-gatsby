import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import LibraryPreview from "../components/LibraryPreview";
import Pager from "../components/pager";

const Library = ({ data, pageContext }) => {
  const articles = data.allNodeLearningLibrary.nodes;

  return (
    <Layout>
      <SEO title="Code Karate - Learn GatsbyJS and Drupal Website Development Skills" />
      <h1>Hero goes here (if page one)</h1>
      {articles.map(article => (
        <LibraryPreview
          key={article.id}
          title={article.title}
          path={article.path.alias}
          summary={article.body.processed.substring(0, 300)}
        />
      ))}
      <Pager pageContext={pageContext} />
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
