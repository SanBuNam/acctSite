import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./title-name.module.scss"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import WorkHistory from "./work-history"

const imageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "landingPageBg.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BackgroundSection = ({ backgroundStyle }) => (
  <StaticQuery
    query={imageQuery}
    render={data => {
      const imageSharp = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="section"
          className={backgroundStyle}
          fluid={imageSharp}
        >
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <h1>
                <span className={styles.title}>David Lee,</span>
                <br />
                <p className={styles.subtitle}>
                  Website & Online Store Builder <span>|</span> Software
                  Developer <span>Orange County</span>, California.
                </p>
              </h1>
            </div>
          </div>
          <WorkHistory />
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  background-size: center;
`

export default StyledBackgroundSection
