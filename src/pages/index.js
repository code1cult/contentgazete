import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  debugger
  return (
<Layout>
    <h1>{data.contentfulBlogPost.title}</h1>
    <p>{data.contentfulBlogPost.description.description}</p>
    
   
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
  
}
export default IndexPage

export const query = graphql`
  query PageQuery {
    
      contentfulBlogPost {
        title
        description {
          id
          description
        }
        
      }
    
  }
`