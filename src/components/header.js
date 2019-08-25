import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import Navbar from "./navbar"

// HeaderLink component
// const HeaderLink = props => (
//   <Link className={styles.link} to={props.to}>
//     {props.text}
//   </Link>
// )

// HomeButton component
// const HomeButton = props => (
//   <Link to={props.to}>
//     <div className={styles.button}>{props.text}</div>
//   </Link>
// )

// SocialButton component
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
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <div className={styles.row}>
          <img
            className={styles.logo}
            src="freelance-developer.png"
            alt="David group"
          />
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
