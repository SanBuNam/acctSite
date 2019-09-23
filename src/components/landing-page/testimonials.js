import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Referrals from "../layouts/picture-frame"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0.15rem;
  background-color: $color-navy;
`

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
        <StyledContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Referrals
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
        </StyledContainer>
      )
    }}
  />
)
