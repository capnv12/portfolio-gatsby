import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'
import SiteInfo from './SiteInfo'
import { slide as Menu } from 'react-burger-menu'
import './MainMenu.css'




const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter:{
          name:{
            eq:"Main Menu"
          }
        }){
          edges{
            node{
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
    `} render={props =>(
        <div className="MainMenuWrapper">
          <MainMenuInner className="MainMenuInner">
            <SiteInfo/><Menu className="bm-menu">
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>(
                      <MenuItem className="bm-item-list" to={item.object_slug} key={item.title} activeClassName="active">
                      {item.title}
                    </MenuItem>
            ))}</Menu>
            </MainMenuInner>
        </div>
    )}/>
);

export default MainMenu;