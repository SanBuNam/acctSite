import React from "react"
import styles from "./three-layout.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "tree" } } }) {
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
  const data = useStaticQuery(getImages)

  return (
    <div className={styles.container}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div>
            <div>
              <img />
            </div>
            <div>
              <h4>eightchy4</h4>
              <p>paragraph</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Container
