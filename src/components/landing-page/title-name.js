import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./title-name.module.scss"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const imageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "happy-child.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1360) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={imageQuery}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          <div className={styles.container}>
            <h1>
              <span className={styles.title}>I am David,</span>
              <br />
              <p className={styles.subtitle}>
                Freelance web developer in Orange County, California with over
                15 years of experience.
              </p>
            </h1>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
`

export default StyledBackgroundSection
