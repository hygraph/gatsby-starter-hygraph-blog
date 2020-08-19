require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'GraphCMS Blog',
    description:
      'Gatsby blog starter for GraphCMS! Powered by `gatsby-source-graphcms`, featuring `gatsby-image` and MDX!',
    keywords: 'Headless CMS, GraphCMS, GraphQL CMS, Gatsby',
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
      },
    },
    'gatsby-transformer-sharp',
  ],
}
