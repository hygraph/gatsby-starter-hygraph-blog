import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function BlogPostTemplate({ data: { authorImage }, pageContext: { post } }) {
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
              </dd>
            </div>
          </dl>
          <div>
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {post.title}
            </h1>
          </div>
        </div>
      </header>
      <div className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20">
        <dl className="pt-6 pb-10 lg:pt-11 lg:border-b lg:border-gray-200">
          <dt className="sr-only">Author</dt>
          <dd>
            <ul className="flex justify-center lg:block space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8">
              <li className="flex items-center space-x-2">
                <Img
                  fluid={authorImage.localFile.childImageSharp.fluid}
                  className="w-10 h-10 rounded-full"
                  fadeIn={false}
                />
                <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                  <dt className="sr-only">Name</dt>
                  <dd className="text-gray-900">{post.author.name}</dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
        <div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider>
              <MDXRenderer>
                {post.content.markdownNode.childMdx.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </article>
  )
}

export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  query BlogPostQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
  }
`

export default BlogPostTemplate
