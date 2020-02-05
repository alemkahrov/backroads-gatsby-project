import React from 'react'
import SectionTitle from "../SectionTitle"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

export default function About() {
  return (
    <section className={styles.about}>
      <SectionTitle title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
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
