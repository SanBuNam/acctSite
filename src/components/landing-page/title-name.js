import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./title-name.module.scss"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const imageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "titleBackground.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1130) {
          ...GatsbyImageSharpFluid_withWebp
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
            {/* <FixedNavigation /> */}
            <div className={styles.innerContainer}>
              <h1>
                <span className={styles.title}>I am David,</span>
                <br />
                <p className={styles.subtitle}>
                  Freelance web developer in <span>Orange County</span>,
                  California with over 15 years of experience.
                </p>
              </h1>
            </div>
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
