import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import { Link } from "gatsby"

export const TourTemplate = ({ data }) => {

  const { name, price, country, days, start, description: { description }, journey, images } = data.tour
  const [mainImage, ...tourImages] = images
  console.log(mainImage);
  console.log(tourImages);
  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img key={index} fluid={item.fluid} alt="single tour" className={styles.image} />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h3>daily schedule</h3>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return (
                <Day key={index} day={item.day} info={item.info} />
              )
            })}
          </div>
          <Link to="/tours/" className="btn-primary">back to tours</Link>
        </div>
      </section>
    </Layout>

  )
}

export const query = graphql`
query ($slug: String!) {
        tour: contentfulTourExample(slug: {eq: $slug}) {
        name
        price
        country
        days
        start(formatString: "dddd MMMM Do, YYYY")
        description {
          description
        }
        journey {
          day
        info
        }
        images {
          fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
  `

export default TourTemplate