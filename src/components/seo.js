import React from 'react'
import { useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

function SEO({ description, title }) {
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

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <title>{title || 'Home'}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default SEO
