import React, { Component } from "react"
import Layout from "../components/Layout/Layout"

class IndexPage extends Component {
  render() {
    // const articles = this.props.data.allNodeArticle.edges;
    // const articleTeasers = articles.map(article => <div>
    //     <h1>{article.node.title}</h1>
    //     <div className="bodyWrapper" dangerouslySetInnerHTML={{ __html: article.node.body.value }} />
    //     <p>Posted {article.node.created}</p>
    //   </div>);

    return <Layout>
      <h1>A Completely Free Drupal Resource</h1>
      <p>
        <span className="highlight">The Mission: </span> To build the largest collection of free Drupal learning materials*
        </p>
      <p>
        <span className="highlight">The Backstory: </span> Code Karate was started by me (<a href="/about">Shane Thomas</a>)
          in 2009 to a write about my learnings and frustrations with Drupal.
          From those humble beginnings Code Karate eventually formed into more than just a blog, it became a powerful Drupal learning resource.
        </p>
      <p>
        I know learning something new (especially something as complex as website development) can be difficult.
        I try to provide different types of materials (videos, written guides and hands-on activities) to fit all different types of learning styles.
        I also do my best to keep it lighthearted and fun. If you can't handle a few bad jokes, Code Karate is not the place for you.
        </p>
      <p>
        <span className="highlight">Get started: </span> No matter where you are at in your quest to become a Drupal ninja, there is always more to learn.
        You have two options for gettings started:
        </p>
      <div className="options-wrapper">
        <div className="option">
          [IMAGE]<br />
          If you are looking for guided learning in a format you can follow along with, check out the Code Karate courses.
          Each course starts at the beginning and allows you to follow along with me.
          </div>
        <div className="option">
          [IMAGE]<br />
          If you are in the middle of a project and looking for something specific, take a look at the Code Karate library.
          It has hundreds of individual guides and lessons that might be able to help you with your project.
          </div>
      </div>
      <p>
        <span className="highlight">Support Code Karate: </span> While this is ultimately a passion project for me, I do
        appreciate support. If you have found value in Code Karate's learning materials over the last 9 years, please consider donating to
        Code Karate on Patreon.
        </p>
      <p>
        If you are an organization, non-profit, or educational institution and you need help with a large scale website project, please contact me
          to discuss how I can help (with the help of <a href="http://thirdandgrove.com">the agency I work for</a>).
        </p>
      <p>
        <span className="highlight">Stay up to date: </span> If you want to
        keep up to date with all my newest learning materials, first make sure you are following me on
          Twitter <a href="http://twitter.com/smthomas3">@smthomas3</a>, then enter your email in the form below.
        You will only get an occasional email from me (an email every week or two).
        </p>
      <p>
        <span class="highlight">Something missing? </span> Is there something missing?
        Contact me and let me know. I'm always looking for more ideas and opinions
        on what I should cover next.
        </p>
      <p>
        Codekarate.com provides free Drupal training courses and lessons
        to help you become a Drupal ninja. All of the content on
        Codekarate.com is completely free, however, if you do find value,
        please consider supporting Code Karate on Patreon.
        </p>
      <p>
        * Besides Drupal.org of course
        </p>
      {/*articleTeasers*/}
    </Layout>;
  }
}

export default IndexPage

// export const query = graphql`
//   query pageQuery {
//     allNodeArticle {
//       edges {
//         node {
//           title
//           created(formatString: "DD-MMM-YYYY")
//           body {
//             value
//           }
//         }
//       }
//     }
//   }
// `
