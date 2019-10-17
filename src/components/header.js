import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import Navbar from "./navbar"
import Image from "gatsby-image"

const SocialButton = props => {
  let style = ""
  let url = ""

  if (props.site === "facebook") {
    style = styles.buttonFacebook
    url = "https://facebook.com/" + props.username
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
    url = "https://www.linkedin.com/" + props.username
  } else if (props.site === "twitter") {
    style = styles.buttonTwitter
    url = "https://www.twitter.com/" + props.username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        fixed: file(relativePath: { eq: "freelance-developer.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <div className={styles.row}>
          <Link to="/">
            <Image fixed={data.fixed.childImageSharp.fixed} />
          </Link>
        </div>
        <Navbar />
        <div className={styles.row}>
          <SocialButton site="facebook" username="sanbunam"></SocialButton>
          <SocialButton site="linkedin" username="sanbunam"></SocialButton>
          <SocialButton site="twitter" username="sanbunam"></SocialButton>
        </div>
      </header>
    )}
  />
)
