import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout"
import ArticleTeaser from "../components/ArticleTeaser/ArticleTeaser";

const IndexPage = (props) => {
  const articles = props.data.allNodeArticle.edges;
  const articleTeasers = articles.map(article => {
    let video = "";
    if (article.node.relationships.video) {
      video = article.node.relationships.video.src.replace("watch?v=", "embed/");
    }
    let path_alias;
    if (article.node.path.alias == null) {
      path_alias = `node/${article.node.drupal_id}`;
    } else {
      path_alias = article.node.path.alias;
    }
    return (
      <ArticleTeaser
        title={article.node.title}
        created={article.node.created}
        video={video}
        body={article.node.body.processed}
        path_alias={path_alias}
      />
    );
  });

  return <Layout>
    <h1>Code Karate Content</h1>
    {articleTeasers}
  </Layout>;
};

export default IndexPage;

export const query = graphql`
  query pageQuery {
    allNodeArticle(sort: {fields: [created], order:DESC}, limit: 25) {
      edges {
        node {
          drupal_id
          title
          created(formatString: "DD-MMM-YYYY")
          body {
            processed
          }
          path {
            alias
          }
          relationships {
            video: field_video {
              src: field_media_oembed_video
            }
          }
        }
      }
    }
  }
`
