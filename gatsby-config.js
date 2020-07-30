require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        downloadLocalImages: true,
      },
    },
    'gatsby-transformer-sharp',
  ],
}
