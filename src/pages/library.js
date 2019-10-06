import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import { css } from '@emotion/core';

import LibraryPreview from '../components/LibraryPreview';
import Layout from '../components/Layout';
import { ensureTrailingSlash } from '../utils/trailingSlash';

const Library = ({ data }) => {
  const items = data.allNodeLearningLibrary.nodes;

  return (
    <Layout>
        <div>
          {items.slice().map(item => (
            <LibraryPreview key={item.title} item={item} />
          ))}
        </div>
    </Layout>
  );
};

Library.propTypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allNodeLearningLibrary(
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        id
        title
        path {
          alias
        }
      }
    }
  }
`;

export default Library;
