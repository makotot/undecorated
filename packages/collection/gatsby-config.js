module.exports = {
  pathPrefix: '/undecorated',
  siteMetadata: {
    title: `undecorated`,
    description: ``,
    author: `makotot`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
