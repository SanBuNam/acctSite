import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./title-name.module.scss"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const imageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "mainBG.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
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
                <span className={styles.title}>I am David,</span>
                <br />
                <p className={styles.subtitle}>
                  Freelance web developer in <span>Orange County</span>,
                  California. E-Commerce specialist.
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
  background-size: center;
`

export default StyledBackgroundSection
