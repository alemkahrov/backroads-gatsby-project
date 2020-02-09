import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from "../SectionTitle"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"

const getImg = graphql`
query aboutImage{
  aboutImage: file(relativePath:{eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG

      }
    }
  }
}
`

export default function About() {
  const { aboutImage } = useStaticQuery(getImg);
  return (
    <section className={styles.about}>
      <SectionTitle title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}
