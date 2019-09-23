import React from "react"
import styled from "styled-components"

const ContainerDiv = styled.div`
  max-width: 1080px;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  background-color: $color-navy;
  color: $color-gray;
  span {
    color: $color-white;
  }
`

const SalesStatement = () => {
  return (
    <ContainerDiv>
      <h3>“I really just need a small website…”</h3>
      <p>Everyone says that, then goes on to describe….</p>
      <p>
        Web Developers Studio typically charges by the hour – although we are
        happy to create proposals for websites with guaranteed budgets over
        $5,000. Here are some ballpark development figures to suit any budget.
        Note that hosting is optional but recommended.
      </p>
    </ContainerDiv>
  )
}

export default SalesStatement
