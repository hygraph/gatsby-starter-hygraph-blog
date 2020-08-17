import React from 'react'
import { Link } from 'gatsby'

import GraphCMSLogo from '../svg/logo.svg'
import GraphCMSMark from '../svg/mark.svg'

function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link to="/" aria-label="GraphCMS Gatsby Blog Starter">
          <GraphCMSLogo className="hidden sm:block h-10" />
          <GraphCMSMark className="h-10 sm:hidden" />
        </Link>
      </div>
    </header>
  )
}

export default Header
