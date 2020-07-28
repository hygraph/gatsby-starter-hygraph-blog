import React from 'react'

function BlogPostTemplate({ pageContext: { post } }) {
  return <h1>{post.title}</h1>
}

export default BlogPostTemplate
