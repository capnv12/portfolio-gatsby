import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'


export default ({pageContext}) => (
    <Layout>
        <h1>
            {pageContext.title}
        </h1>
        <strong>Website URL:</strong>
        <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer">{pageContext.acf.portfolio_url}</a>
        <img src={pageContext.featured_media.source_url}/>
        <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
    </Layout>
);