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
          title
        }
      }
    }
  `)

  const defaultTitle = siteMetadata.title
  const defaultDescription = siteMetadata.description

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
    </Helmet>
  )
}

export default SEO
