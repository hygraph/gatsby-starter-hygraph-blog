import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import './src/styles/index.css'
import Layout from './src/components/layout'

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) => <MDXProvider>{element}</MDXProvider>

export { wrapPageElement, wrapRootElement }
