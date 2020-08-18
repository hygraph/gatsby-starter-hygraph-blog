import React from 'react'

import Header from './header'

function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
