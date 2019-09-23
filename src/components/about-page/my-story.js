import React, { Fragment } from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  background: #f2f2f2;
  color: #263248;
  padding: 5rem;
  h5 {
    margin-left: 3rem;
    font-size: 2.4rem;
  }
  p {
    margin-left: 3rem;
  }
  ul {
    list-style: none;
  }
  div {
    margin: 7rem auto;
  }
  span {
    color: orange;
  }
`

const ProcessIntro = () => {
  return (
    <StyledDiv>
      <Fragment>
        <img></img>
        <p>
          I am an Orange County-based freelance web developer and designer with
          more than 15 years of experience working on websites and apps,
          including 8 years developing Drupal sites. My background in IT and
          development covers a range of sectors, from charity to agency work to
          e-commerce. That experience, along with my passion for travel, mean I
          have the expertise to take on most projects.
        </p>
        <p>
          The ability to combine technical knowledge with creativity is what
          enticed me to this field. My passion for web design began early, at
          the age of 14, when I developed and designed my school’s website and
          newspaper.
        </p>
        <p>
          Growing up in Germany, I successfully completed an apprenticeship for
          Deutsche Telekom, one of Europe’s largest telecommunication companies.
          I received above-average grades as an IT Specialist in System
          Integration. I thoroughly enjoyed the technical aspects of that job,
          but I knew that my passion was in the web.
        </p>
        <p>
          I later moved to England and began work with a small start-up in Devon
          called eCards Media. I gained precious experience in this role. I
          worked independently and drove new ideas even as I learned invaluable
          business and sales skills from my talented mentors.
        </p>
        <p>
          Australia was the next stop on my professional journey. In Sydney I
          worked as a web developer for the country’s most prestigious design
          agency, Precinct, who are part of the renowned Photon Group. Precinct
          specialize in highly corporate
        </p>
        <p>
          identity, financial reports and websites. As the sole developer on my
          team, I improved fast. I also learned about typography, great design
          and business strategy.
        </p>
      </Fragment>
    </StyledDiv>
  )
}

export default ProcessIntro
