import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export const blog = ({ data }) => {

  return (
    <Layout>
      <StyledHero img={data.blogBG.childImageSharp.fluid} />
      <Link to="/">Back home</Link>
    </Layout>
  )
}

export const query = graphql`
query{
  blogBG: file(relativePath:{eq: "blogBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog
