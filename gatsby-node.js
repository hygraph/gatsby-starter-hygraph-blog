const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        posts: allGraphCmsPost {
          nodes {
            id
            author {
              id
              name
            }
            content {
              markdownNode {
                childMdx {
                  body
                }
              }
            }
            date: formattedDate
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
        id: post.id,
        post,
      },
      path: `/posts/${post.slug}`,
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
  }

  createResolvers(resolvers)
}
