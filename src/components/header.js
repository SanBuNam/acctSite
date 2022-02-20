import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import Navbar from "./navbar"
import Image from "gatsby-image"
import ToggleMenu from "../components/toggle-menu"

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
  } else if (props.site === "instagram") {
    style = styles.buttonInstagram
    url = "https://www.instagram.com/" + props.username
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
        <div className={styles.rowLeft}>
          <Link to="/">
            <Image fixed={data.fixed.childImageSharp.fixed} />
          </Link>
        </div>
        <Navbar />
        <div className={styles.rowRight}>
          <SocialButton
            site="instagram"
            username="codingdokhak/"
          ></SocialButton>
          <SocialButton
            site="linkedin"
            username="in/david-lee-480985119/"
          ></SocialButton>
          <SocialButton
            site="facebook"
            username="DavidCreativeStudio"
          ></SocialButton>
        </div>
        <ToggleMenu />
      </header>
    )}
  />
)
