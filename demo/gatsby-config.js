module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Instagram Demo",
  },
  plugins: [
    `@horacioh/gatsby-theme-mdx`,
    {
      resolve: `@horacioh/gatsby-theme-instagram`,
      options: {
        username: "doraforscale",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-87410585-4",
      },
    },
  ],
}
