import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

function SEO({ title, seo }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          keywords
          title
        }
      }
    }
  `)

  const defaultDescription = siteMetadata.description
  const defaultKeywords = siteMetadata.keywords
  const defaultTitle = siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <title>{seo?.title || title || 'Home'}</title>
      <meta
        name="description"
        content={seo?.description || defaultDescription}
      />
      <meta name="keywords" content={seo?.keywords || defaultKeywords} />
      {seo?.image && <meta property="image" content={seo.image.url} />}
    </Helmet>
  )
}

export default SEO
