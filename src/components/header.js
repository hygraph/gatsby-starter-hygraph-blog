import React, { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { globalHistory, useLocation } from '@reach/router'
import cx from 'classnames'

import GraphCMSLogo from '../svg/logo.svg'
import GraphCMSMark from '../svg/mark.svg'
import Transition from './transition'

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  const { pages } = useStaticQuery(graphql`
    {
      pages: allGraphCmsPage {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)

  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH') setMobileNavOpen(false)
      }),
    [setMobileNavOpen]
  )

  const toggleMobileNavOpen = () => setMobileNavOpen((open) => !open)

  return (
    <header className="py-10 relative">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" aria-label="GraphCMS Gatsby Blog Starter">
              <GraphCMSLogo className="hidden sm:block h-10" />
              <GraphCMSMark className="h-10 sm:hidden" />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => toggleMobileNavOpen()}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:ml-10 md:pr-4 space-x-8">
          {pages.nodes.map((page) => {
            const isActive = location.pathname.startsWith(`/${page.slug}`)

            return (
              <Link
                key={page.id}
                to={`/${page.slug}`}
                className={cx(
                  'inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium leading-5 focus:outline-none transition duration-150 ease-in-out',
                  {
                    'border-purple-500 text-gray-900 focus:border-purple-600': isActive,
                    'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600': !isActive,
                  }
                )}
              >
                {page.title}
              </Link>
            )
          })}
        </div>
      </nav>
      <Transition
        show={mobileNavOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 py-2 -mx-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div
              className="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 pt-8 flex items-center justify-between">
                <div>
                  <GraphCMSMark className="h-10" />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => toggleMobileNavOpen()}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-1 px-2 pt-2 pb-3 space-y-1">
                {pages.nodes.map((page) => {
                  const isActive = location.pathname.startsWith(`/${page.slug}`)

                  return (
                    <Link
                      key={page.id}
                      to={`/${page.slug}`}
                      className={cx(
                        'block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out',
                        {
                          'border-purple-500 text-purple-500 bg-purple-50 focus:text-purple-600 focus:bg-purple-100 focus:border-purple-600': isActive,
                          'border-transparent text-gray-500 hover:text-gray-600 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-600 focus:bg-gray-50 focus:border-gray-300': !isActive,
                        }
                      )}
                      role="menuitem"
                    >
                      {page.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  )
}

export default Header
