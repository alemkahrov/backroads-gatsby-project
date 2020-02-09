import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const Header = () => {

  const siteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
  `

  const { site: { siteMetadata: info } } = useStaticQuery(siteData);

  return (
    <div>
      <h1>title: {info.title}</h1>
      <p>description: {info.description}</p>
      <p>author: {info.author}</p>
    </div>
  )
}

export default Header