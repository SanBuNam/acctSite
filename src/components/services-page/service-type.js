import React from "react"
import styles from "./service-type.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Samples2 from "./industry-reference"

const ServiceType = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "services" } } }
          sort: { fields: [frontmatter___date], order: DESC }
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
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={styles.container}>
          <h2>Service Types</h2>
          <div className={styles.outerContainer}>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              const { service, price, hosting, list } = node.frontmatter
              return (
                <div className={styles.innerContainer}>
                  <div className={styles.option}>
                    <h3>{service}</h3>
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
          <Samples2 />
        </div>
      )
    }}
  />
)

export default ServiceType
