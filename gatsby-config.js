require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Hygraph Blog',
    description:
      'Gatsby blog starter for Hygraph! Powered by `gatsby-source-hygraph`, featuring `gatsby-image` and MDX!',
    keywords: 'Headless CMS, Hygraph, GraphQL CMS, Gatsby',
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.HYGRAPH_ENDPOINT,
        token: process.env.HYGRAPH_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
        fragmentsPath: 'hygraph-fragments',
        queryConcurrency: 1
      },
    },
    'gatsby-transformer-sharp',
  ],
}
