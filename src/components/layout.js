import React from 'react'

import Footer from './footer'
import Header from './header'
import SEO from './seo'

function Layout({ children, pageContext: { page } }) {
  return (
    <React.Fragment>
      <SEO {...page} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl w-full">
          <Header />
          <main className="flex-grow mb-8">{children}</main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
