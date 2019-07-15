module.exports = (options) => ({
  siteMetadata: {
    title: "Gatsby Theme Instagram",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: options.username || 'gatsbyjs'
      }
    }
  ],
})
