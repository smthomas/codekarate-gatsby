import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';

const articleTemplate = (props) => {
  const { nodeArticle: article } = props.data;
  let video = "";
  let series = "";
  let tags = [];

  if (article.relationships.video) {
    video = article.relationships.video.src.replace("watch?v=", "embed/");
  }
  if (article.relationships.series) {
    series = article.relationships.series[0].name;
  }
  if (article.relationships.tags) {
    tags = article.relationships.tags;
  }

  return (
    <Layout>
      <Helmet
        title={`${article.title} - Code Karate`}
        meta={[
          { name: 'description', content: article.title },
        ]}
      />
      <Article
        {...article}
        series={series}
        tags={article.relationships.tags}
        video={video}
        body={article.body.processed}
      />
    </Layout>
  )
};

export default articleTemplate;

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the article data.
export const query = graphql`
  query ArticleTemplate($drupal_id: String!) {
    nodeArticle(drupal_id: {eq: $drupal_id}) {
      drupal_id
      title
      created(formatString: "DD-MMM-YY")
      episode: field_episode
      body {
        processed
      }
      relationships {
        series: field_series {
          name
        }
        tags: field_tags {
          name
        }
        video: field_video {
          src: field_media_oembed_video
        }
      }
    }
  }
`;
