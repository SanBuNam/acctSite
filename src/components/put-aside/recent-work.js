import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "./recent-work.module.scss"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fixed(width: 450, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const RecentWork = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className={styles.container}>
      <div className={styles.titleDiv}>
        <h3>Recent work sample</h3>
      </div>
      <div className={styles.leftContainer}>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </div>
      <div className={styles.rightContainer}>
        <h5>Software Developer</h5>
        <h4>NMSI Mortgage Group, Inc.</h4>
        <p>
          As Software Developer I helped assess the charity’s digital estate of
          more than 12 websites built with different technologies. I was later
          involved in their digital transformation moving from Drupal to Adobe
          Experience Manager. This involved architectural decisions and
          providing technical guidance and impartial advice. I was also in
          charge of a security project. Leading a team of 5 experienced Drupal
          developers we secured sites and servers, and I put processes in place
          to accommodate the charities future requirements for a scalable and
          secure platform.
        </p>
      </div>
    </section>
  )
}

export default RecentWork
