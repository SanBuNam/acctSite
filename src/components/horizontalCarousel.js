import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"

const width = "100%",
  height = "350px"

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
`
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>{children}</Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
)
const Carousel = makeCarousel(CarouselUI)

export default () => (
  <Carousel>
    <Slide right>
      <div>
        <h1>Slide 1</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1>Slide 2</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1>Slide 3</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
  </Carousel>
)

const slideImages = graphql`
  query {
    desktop: file(relativePath: { eq: "Sanfrancisco.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
