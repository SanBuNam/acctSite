import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import styles from "./work-with-me.module.scss"
import TextButton from "../buttons/text-button"
import BackgroundImage from "gatsby-background-image"

const myApproachBox = ({ backgroundImage }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Georgia-square.jpeg" }) {
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
        <BackgroundImage
          Tag="div"
          className={backgroundImage}
          fluid={imageData}
        >
          <section className={styles.container}>
            <h3>
              Want to work with me? <br />
              <span>Get in touch</span>
            </h3>
            <div className={styles.contactInfo}>
              <div className={styles.sides}>
                <h5>Contact Work</h5>
                <img
                  alt="random1"
                  src={"https://source.unsplash.com/50x50/?"}
                />
                <TextButton text="Enquire" />
              </div>
              <div className={styles.middle}>
                <h5>Projects</h5>
                <img
                  alt="random1"
                  src={"https://source.unsplash.com/50x50/?"}
                />
                <TextButton text="Request an estimate" />
              </div>
              <div className={styles.sides}>
                <h5>Existing Projects</h5>
                <img
                  alt="random1"
                  src={"https://source.unsplash.com/50x50/?"}
                />
                <TextButton text="Contact me" />
              </div>
            </div>
          </section>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(myApproachBox)`
  width: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
`

export default StyledBackgroundSection
