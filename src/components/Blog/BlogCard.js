import React from 'react'
import styles from "../../css/blog-card.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} alt="single post" className={styles.img} />
        <Link to={`/blog/${slug}`} className={styles.link}>read more</Link>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
