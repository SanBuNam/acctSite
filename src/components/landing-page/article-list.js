import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Article from "./article"
import styles from "./article.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "testmonial" } } }
        ) {
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
    `}
    render={data => {
      return (
        <div className={styles.container}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Article
                to="/"
                key={node.id}
                keywords={node.frontmatter.keywords}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                name={node.frontmatter.name}
                excerpt={node.excerpt}
              />
            )
          })}
        </div>
      )
    }}
  />
)
