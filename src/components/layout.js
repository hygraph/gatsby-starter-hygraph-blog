import React from 'react'

import Header from './header'
import SEO from './seo'

function Layout({ children, pageContext: { page } }) {
  return (
    <React.Fragment>
      <SEO {...page} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl">
        <Header />
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout
