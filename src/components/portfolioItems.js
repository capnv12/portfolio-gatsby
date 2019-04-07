import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'


const PortfolioItems=() => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio{
              edges{
                node{
                  id
                  title
                  slug
                  excerpt
                  content
                  featured_media {
                    source_url
                  }
                }
              }
            }
          }
        `}  render={props =>(<div className="PortfolioItemsWrapper">{ props.allWordpressWpPortfolio.edges.map(PortfolioItem => (
            <div key={PortfolioItem.id}>
                <div className="PortfolioIte">
                    <h2>{PortfolioItem.node.title}</h2>
                    {/* <img  classname="PortfolioImage" src={PortfolioItem.node.featured_media.source_url} alt="Thumbnail"/> */}
                    <div dangerouslySetInnerHTML={{__html: PortfolioItem.node.excerpt}}/>
                    <Link to={`/portfolio/${PortfolioItem.node.slug}`}>Read More</Link>
                </div>
            </div>
        ))}
        </div>)}/>
    )
}

export default PortfolioItems