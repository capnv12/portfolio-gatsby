/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import MainMenu from './MainMenu'
import {createGlobalStyle} from 'styled-components'
import './css/layout.css'

const GlobalStyles = createGlobalStyle`

`

const Layout = ({ children }) => (
  <div className="layout">
      <MainMenu />
      <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
