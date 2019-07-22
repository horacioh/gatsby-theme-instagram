module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Instagram Demo'
  },
  plugins: [`@horacioh/gatsby-theme-mdx`, {
    resolve: `@horacioh/gatsby-theme-instagram`,
    options: {
      username: 'doraforscale'
    }
  }],
}
