import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import Navbar from "./navbar"
import Image from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        fixed: file(relativePath: { eq: "auto.jpg" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <div className={styles.rowLeft}>
          <Link to="/">
            <Image fixed={data.fixed.childImageSharp.fixed} />
          </Link>
        </div>
        <Navbar />
      </header>
    )}
  />
)
