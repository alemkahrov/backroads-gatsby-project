import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/single-blog.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export const BlogTemplate = ({ data }) => {
  const { title, published, text: { json } } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {

        return (
          <div className="rich">
            <h3>this is a awesome image</h3>
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
            <p>images provided by john doe</p>
          </div>
        )
      },

      "embedded-asset-block": node => {
        const { title, image, text } = node.data.target.fields;
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is other post: {title["en-US"]}</h1>
            <img width="400" src={image["en-US"].fields.file["en-US"].url} />
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <Link to="/blog/" className="btn-primary">all posts</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getPost($slug:String!) {
  post: contentfulPost1(slug:{eq: $slug}) {
    title
    published(formatString: "dddd, D.M Y ")
    text{
      json
    }
  }
}
`

export default BlogTemplate
