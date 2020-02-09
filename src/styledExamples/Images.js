import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import img from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
query Images{
	fixedImg: file(relativePath:{eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fixed(width:300, height:400){
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluidImg: file(relativePath:{eq: "blogBcg.jpeg"}){
    childImageSharp{
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages);
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className="basic-img" alt="" />
      </article>

      <article>
        <h3>Fixed-Blur Image</h3>
        <Img fixed={data.fixedImg.childImageSharp.fixed} />
      </article>

      <article>
        <h3>Fluid-SVG Image</h3>
        <Img fluid={data.fluidImg.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  width: 90vw;
  margin: 0 auto 1.5rem auto;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  article {
    border: 1px solid red;
    padding: 1rem 0;
  }
`

export default Images