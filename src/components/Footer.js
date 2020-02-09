import React from 'react'
import styles from "../css/footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import socialIcons from "../constants/social-icons"
import links from "../constants/links"


export default function () {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <AniLink to={item.path}>{item.text}</AniLink>
            </li>
          )
        })}
      </ul>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
          )
        })}
      </div>
      <p className={styles.copyright}>&copy; Backroads Travel Company {new Date().getFullYear()}. All rights reserved</p>
    </footer>
  )
}
