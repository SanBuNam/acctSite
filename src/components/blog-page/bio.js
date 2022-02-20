import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Styles from "./bio.module.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className={Styles.container}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginLeft: `1rem`,
          marginBottom: `2rem`,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p
        style={{
          marginLeft: `1rem`,
          fontSize: "1.4rem",
        }}
      >
        Presented by {author} freelancer web developer in Orange County,
        California.
        {` `}
        {` `}
        <Link to="/blogs/">📰 Back to Blog List</Link>
      </p>
    </div>
  )
}

export default Bio
