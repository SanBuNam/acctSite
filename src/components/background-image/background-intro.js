import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./background-title.module.scss"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

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
                <span className={styles.title}>Company Name</span>
                <br />
                <p className={styles.subtitle}>
                  Business Services <span>|</span> Business type <span>County</span>, State
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
