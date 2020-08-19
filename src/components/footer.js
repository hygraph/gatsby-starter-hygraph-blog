import React from 'react'

import GitHubSVG from '../svg/github.svg'
import LinkedInSVG from '../svg/linkedin.svg'
import SlackSVG from '../svg/slack.svg'
import TwitterSVG from '../svg/twitter.svg'

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:justify-between py-6">
          <p className="text-gray-300 mb-3 md:mb-0">
            Powered by GraphCMS &amp; Gatsby
          </p>
          <ul className="inline-flex space-x-4">
            <li>
              <a
                href="https://github.com/graphcms/gatsby-graphcms-ecommerce-starter"
                target="_blank"
                className="text-gray-300 hover:text-white text-sm"
                rel="noopener noreferrer"
              >
                <GitHubSVG className="h-5 w-5" />
              </a>
            </li>

            <li>
              <a
                href="http://slack.graphcms.com"
                target="_blank"
                className="text-gray-300 hover:text-white text-sm"
                rel="noopener noreferrer"
              >
                <SlackSVG className="h-5 w-5" />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/graphcms"
                target="_blank"
                className="text-gray-300 hover:text-white text-sm"
                rel="noopener noreferrer"
              >
                <TwitterSVG className="h-5 w-5" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/graphcms"
                target="_blank"
                className="text-gray-300 hover:text-white text-sm"
                rel="noopener noreferrer"
              >
                <LinkedInSVG className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
