module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-drupal-preview`,
      options: {
        //baseUrl: `http://dev-codekarate-d8.pantheonsite.io`,
        baseUrl: `http://localhost:32790`,
        apiBase: `jsonapi`,
        preview: true
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
