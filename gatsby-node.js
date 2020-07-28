const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        posts: allGraphCmsPost {
          nodes {
            id
            date
            excerpt
            slug
            title
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.nodes.forEach((post) => {
    createPage({
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        post,
      },
      path: `/posts/${post.slug}`,
    })
  })
}
