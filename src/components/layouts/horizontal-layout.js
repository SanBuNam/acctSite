import React from "react"
import FlipCard from "../../components/landing-page/card"
import styles from "./horizontal-layout.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const getCardInfo = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "card" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            keywords
            name
            date(formatString: "MMMM YYYY")
          }
          excerpt(truncate: false, pruneLength: 280)
        }
      }
    }
  }
`

const Container = () => {
  const data = useStaticQuery(getCardInfo)

  return (
    <div className={styles.container}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return <FlipCard />
      })}
    </div>
  )
}
export default Container
