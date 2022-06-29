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
      ptions: {
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
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
        fragmentsPath: 'hygraph-fragments',
      },
    },
    'gatsby-transformer-sharp',
  ],
}
