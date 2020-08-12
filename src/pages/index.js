import React from 'react'
import { graphql } from 'gatsby'

function IndexPage({ data: { allGraphCmsPost } }) {
  return allGraphCmsPost.nodes.map((post) => post.title)
}

export const indexPageQuery = graphql`
  {
    allGraphCmsPost {
      nodes {
        id
        date: formattedDate
        excerpt {
          markdownNode {
            childMdx {
              body
            }
          }
        }
        slug
        title
      }
    }
  }
`

export default IndexPage
