module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://dev-codekarate-d8.pantheonsite.io`,
        //baseUrl: `http://localhost:32790`,
        apiBase: `jsonapi`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
