import React from "react"
import styles from "./service-type.module.scss"
import { StaticQuery, graphql } from "gatsby"

const ServiceType = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "services" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                src
                service
                price
                hosting
                list
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
            const { src, service, price, hosting, list } = node.frontmatter
            return (
              <div className={styles.innerContainer}>
                <img src={src} alt={service} />
                <div className={styles.option}>
                  <h3>{service}</h3>
                  <p>{price}</p>
                  <span>{hosting}</span>
                  <ul>
                    {list.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

export default ServiceType
