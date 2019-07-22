module.exports = options => ({
  siteMetadata: {
    title: `Gatsby Theme Instagram`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: options.type || `account`,
        username: options.username || `doraforscale`,
        gridLimit: options.gridLimit || 8,
        hashtag: options.hashtag,
        access_token: options.access_token,
        instagram_id: options.instagram_id,
      },
    },
  ],
})
