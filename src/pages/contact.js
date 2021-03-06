import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.contactBG.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
query{
  contactBG: file(relativePath:{eq: "connectBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`