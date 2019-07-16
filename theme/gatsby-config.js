module.exports = (options) => ({
  siteMetadata: {
    title: "Gatsby Theme Instagram",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: options.username || 'gatsbyjs'
      }
    }
  ],
})
