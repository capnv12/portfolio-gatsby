import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'

const LogoWrapper = styled.img`
  width:150px;
`

const Logo =() => (
    <StaticQuery query={graphql`
    {
        allWordpressWpLogo{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props=> (
        <div>
            <LogoWrapper src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
        </div>
    )}/>
);

export default Logo;