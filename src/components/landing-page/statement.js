import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./statement.module.scss"
import BackgroundImage from "gatsby-background-image"

const Statement = ({ backgroundImage }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "david-sign.jpeg" }) {
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
          <div className={styles.container}>
            <h5>
              “My development career goes back to my school days when I was only
              13. Turning a sketch into something fun and beautiful was amazing
              — and it still is.”
            </h5>
            <div className={styles.bottom}>
              <p>
                Every bit of that same enthusiasm is still there. Although, now
                I design solutions and hand code them.
                <br />
                Learn more <span>about me</span> or{" "}
                <span>the approach I take.</span>
              </p>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Statement
