import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import styles from "./title-name.module.scss"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "happy-child.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1360) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          <section className={styles.container}>
            <h1>
              <span className={styles.title}>I am David,</span>
              <br />
              <p className={styles.subtitle}>
                Freelance web developer in{" "}
                <span>Orange County, California</span> with decades of
                experience.
              </p>
            </h1>
          </section>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height: 40.44rem;
  background-repeat: no-repeat;
  background-position: center;
`

export default StyledBackgroundSection