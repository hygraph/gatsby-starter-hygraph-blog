const crypto = require('crypto')
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
              markdown
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

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
}) => {
  if (node.internal.type.includes('GraphCMS_')) {
    const fields = Object.entries(node)
      .map(([, value]) => value)
      .filter(
        (value) =>
          value?.['remoteTypeName'] && value['remoteTypeName'] === 'RichText'
      )

    fields.forEach((field) => {
      const markdownNode = {
        id: `MarkdownNode:${createNodeId(node.id)}`,
        parent: node.id,
        internal: {
          type: `GraphCMS_MarkdownNode`,
          mediaType: 'text/markdown',
          content: field.markdown,
          contentDigest: crypto
            .createHash(`md5`)
            .update(field.markdown)
            .digest(`hex`),
        },
      }

      createNode(markdownNode)

      field.markdownNode = markdownNode.id
    })
  }
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type GraphCMS_RichText {
      markdownNode: GraphCMS_MarkdownNode @link
    }
  `)
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
