import React from 'react'
import TourList from "../Tours.js/TourList"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"

const getTours = graphql`
query {
  tours: allContentfulTourExample {
    edges {
      node {
        name
        price
        slug
        country
        contentful_id
        days
        images{
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

export const Tours = () => {
  const { tours } = useStaticQuery(getTours);

  return (
    <section className={styles.tours}>
      <TourList tours={tours} />
    </section>
  )
}

export default Tours