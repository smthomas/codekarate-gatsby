import React, { Component } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SplitSection from "../components/SplitSection";
import FullWidthCTA from "../components/FullWidthCTA";

class IndexPage extends Component {
  render() {

    return <Layout>
      Testing
      {/* <Hero />
      <SplitSection title="Learning Styles" />
      <SplitSection title="Adaptive Learning" />
      <SplitSection title="Code Syncing" />
      <SplitSection title="Full Course Guides" />
      <SplitSection title="Slider/Community" />
      <FullWidthCTA /> */}

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
