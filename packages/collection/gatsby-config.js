module.exports = {
  pathPrefix: '/undecorated',
  siteMetadata: {
    siteUrl: 'https://makotot.github.io/undecorated/',
    title: `undecorated`,
    description: `Collection of reusable layout pattern of CSS and styled-components.`,
    author: `makotot`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://www.google-analytics.com',
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `undecorated`,
        short_name: `ud`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#222`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-58223460-7',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
