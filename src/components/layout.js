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

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body{
    font-family: 'Open Sans', sans-serif;
    margin:0;
    padding:0;

  }
`

const Layout = ({ children }) => (
  <div>
      <GlobalStyles />
      <MainMenu />
      <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
