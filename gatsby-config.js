require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Code Karate`,
    description: `Learn Gatsby and Drupal website development skills.`,
    image: `${__dirname}/src/images/cklogo.png`,
    author: `@smthomas3`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_URL,
        apiBase: `api`,
        preview: true,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://codekarate.us2.list-manage.com/subscribe/post?u=64a555e4a8f7af34baca245be&amp;id=add2e2f22d',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Karate`,
        short_name: `codekarate`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#EC1C24`,
        display: `minimal-ui`,
        icon: 'src/images/cklogo.png',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-M62WCG5',
        includeInDevelopment: false,
      },
    },
  ]
};
