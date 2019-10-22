import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/boyRide.jpg/" }) {
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
    <div
      style={{
        display: `flex`,
        borderBottom: `1px solid #7e8aa2`,
      }}
    >
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
        }}
      >
        Presented by <strong>{author}</strong> freelancer web developer in
        Orange County, California.
        {` `}
        <a
          style={{
            marginLeft: `1rem`,
            textDecoration: `none`,
            color: `orange`,
            borderBottom: `1px solid orange`,
          }}
          href={`https://twitter.com/${social.twitter}`}
        >
          You can follow me on Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
