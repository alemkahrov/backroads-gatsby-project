import React, { Component } from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours.js/Tours"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.toursBG.childImageSharp.fluid} />
        <Tours />
      </Layout>
    )
  }
}

export const query = graphql`
query{
  toursBG: file(relativePath:{eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
