import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
// import imageOne from "../../../content/images/Sanfrancisco.jpeg"
// import imageTwo from "../../../content/images/david-sign.jpeg"
// import imageThree from "../../../content/images/responsive-website.jpeg"
import BackgroundDisplay from "./background-display"

const width = "100%",
  height = "350px"

const Container = styled.div`
  background-color: #7e8aa2;
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
      <BackgroundDisplay src="" header="" description="">
        one
      </BackgroundDisplay>
    </Slide>
    <Slide right>
      <BackgroundDisplay src="" header="" description="">
        two
      </BackgroundDisplay>
    </Slide>
    <Slide right>
      <BackgroundDisplay src="" header="" description="">
        three
      </BackgroundDisplay>
    </Slide>
  </Carousel>
)
