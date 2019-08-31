import React from "react"
import Image from "gatsby-image"
import styles from "./why-hire-me.module.scss"
import { useStaticQuery, graphql } from "gatsby"

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

const WhyMe = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h3>Most recent work</h3>
      </div>

      <div className={styles.leftContainer}>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </div>

      <div>
        <h5>Software Developer</h5>
        <h4>NMSI Mortgage Group, Inc.</h4>
        <p>
          If you are looking for a{" "}
          <span>Freelance Web Developer in Orange County</span>, an experienced
          full stack developer or simply want a few changes to your site I can
          help you. I will work closely with you to deliver projects that best
          matches your business values and objectives. If you already have a
          site, I can provide regular, ongoing maintenance and support.
        </p>
      </div>
    </div>
  )
}

export default WhyMe
