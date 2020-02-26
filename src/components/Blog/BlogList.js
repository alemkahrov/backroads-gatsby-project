import React from 'react'
import BlogCard from "../Blog/BlogCard"
import SectionTitle from "../../components/SectionTitle"
import styles from "../../css/blog.module.css"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
query {
  posts: allContentfulPost1(sort:{fields: published, order:DESC}) {
    edges{
      node {
        title
        slug
        id: contentful_id
        published(formatString: "dddd, D. MMMM Y")
        image{
          fluid{
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);

  return (
    <section className={styles.blog}>
      <SectionTitle title="our" subtitle="blog" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return (
            <BlogCard key={node.id} blog={node} />
          )
        })}

      </div>
    </section>
  )
}

export default BlogList