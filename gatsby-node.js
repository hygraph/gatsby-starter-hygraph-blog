const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        pages: allGraphCmsPage {
          nodes {
            id
            content {
              markdownNode {
                childMdx {
                  body
                }
              }
            }
            seo {
              description
              image {
                url
              }
              keywords
              title
            }
            slug
            subtitle
            title
          }
        }
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
          edges {
            nextPost: next {
              slug
              title
            }
            page: node {
              id
              author {
                id
                name
                title
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
              seo {
                description
                image {
                  url
                }
                keywords
                title
              }
              slug
              title
            }
            previousPost: previous {
              slug
              title
            }
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.edges.forEach(({ nextPost, page, previousPost }) => {
    createPage({
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        id: page.id,
        page,
        previousPost,
        nextPost,
      },
      path: `/posts/${page.slug}`,
    })
  })

  data.pages.nodes.forEach((page) => {
    createPage({
      component: path.resolve('./src/templates/default-page.js'),
      context: {
        page,
      },
      path: `/${page.slug}`,
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
