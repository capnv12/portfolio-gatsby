import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'



const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata{
          edges{
            node{
              name
              description
            }
          }
        }
      }
    `} render={props => (
        <div className="SiteInfoWrapper">
            <div className="SiteTitle">
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </div>
            <div>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </div>
            </div>
    )}/>
)

export default SiteInfo;