import React from 'react';
import Layout from '../components/layout'
import './page.css'
import PortfolioItems from '../components/portfolioItems'

export default ({pageContext}) => (
    <Layout>
    <div  className='layout'>
        <h1 dangerouslySetInnerHTML={{__html:pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html:pageContext.content}} />
        <PortfolioItems />
    </div>
    </Layout>
);