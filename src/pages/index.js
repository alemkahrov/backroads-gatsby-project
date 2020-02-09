import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// import SimpleHero from "../components/SimpleHero"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

export default ({ data }) =>
  <Layout>
    <StyledHero home="true" img={data.homeBG.childImageSharp.fluid}>
      <Banner title="continue exploring" info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam">
        <Link to="/tours/" className="btn-white">explore tours</Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>

export const query = graphql`
query{
  homeBG: file(relativePath:{eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`