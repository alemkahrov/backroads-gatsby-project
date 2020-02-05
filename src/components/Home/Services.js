import React from 'react'
import SectionTitle from "../../components/SectionTitle"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

export default function Services() {
  return (
    <section className={styles.services}>
      <SectionTitle title="our" subtitle="services" />
      <div className={styles.center}>
        {
          services.map((item, index) => {
            return (
              <div key={index} className={styles.service}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
