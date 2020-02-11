import React from 'react'
import Tour from "../Tour"
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from "../SectionTitle"
import styles from "../../css/items.module.css"
import { Link } from "gatsby"

const getTours = graphql`
query {
  featuredTours: allContentfulTourExample(filter:{featured:{eq:true}}) {
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

export const FeaturedTours = () => {
  const data = useStaticQuery(getTours);
  const tours = data.featuredTours.edges;

  return (
    <section className={styles.tours}>
      <SectionTitle title="featured" subtitle="tours" />
      <div className={styles.center}>
        {
          tours.map(({ node }) => {
            return (
              <Tour key={node.contentful_id} tour={node} />
            )
          })
        }
      </div>
      <Link to="/tours/" className="btn-primary">all tours</Link>
    </section>
  )
}

export default FeaturedTours
