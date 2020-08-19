import React from 'react'

import GitHubSVG from '../svg/github.svg'
import LinkedInSVG from '../svg/linkedin.svg'
import SlackSVG from '../svg/slack.svg'
import TwitterSVG from '../svg/twitter.svg'

const socialLinks = [
  {
    Component: GitHubSVG,
    href: 'https://github.com/graphcms/gatsby-graphcms-ecommerce-starter',
  },
  {
    Component: SlackSVG,
    href: 'http://slack.graphcms.com',
  },
  {
    Component: TwitterSVG,
    href: 'https://twitter.com/graphcms',
  },
  {
    Component: LinkedInSVG,
    href: 'https://www.linkedin.com/company/graphcms',
  },
]

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
        <p className="text-gray-300">Powered by GraphCMS &amp; Gatsby</p>
        <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="text-gray-300 hover:text-white text-sm"
                rel="noopener noreferrer"
              >
                <Component className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
