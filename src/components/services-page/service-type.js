import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  border: solid 1px orange;
  background-color: #f2f2f2;
  color: #7e8aa2;
  line-height: 0.5;
  text-align: center;
  .top {
    span {
      color: #222f3e;
    }
  }
  .bottom {
    margin-top: 0.333rem;
    padding: 0.3rem;
    li {
      line-height: 1;
      list-style: none;
      text-align: left;
      font-size: 1.4rem;
    }
  }
`

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
        <StyledContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { src, service, price, hosting, list } = node.frontmatter
            return (
              <div>
                <div className="top">
                  <img src={src} alt={service} />
                  <p>{service}</p>
                  <br />
                  <span>{price}</span>
                  <p>{hosting}</p>
                </div>
                <div className="bottom">
                  {list.map(item => (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
            )
          })}
        </StyledContainer>
      )
    }}
  />
)

export default ServiceType
