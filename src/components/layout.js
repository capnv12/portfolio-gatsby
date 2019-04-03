/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MainMenu from './MainMenu'
import styled, {createGlobalStyle} from 'styled-components'
import Header from "./header"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body{
    font-family: 'Open Sans', sans-serif;
    margin:0;
    padding:0;

  }
`
const layoutWrapper = styled.div`
  width:360px;
  margin: 0 auto;
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
