import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const siteData = graphql`
query {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}`

const RegularHeader = () => {
  return (
    <StaticQuery query={siteData} render={(data) => {
      console.log(data);
      return (
        <h1>title: {data.site.siteMetadata.title}</h1>
      )
    }} />
  )
}

export default RegularHeader
