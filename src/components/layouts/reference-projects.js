import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
import imageOne from "../../../content/images/cj.png"
import imageTwo from "../../../content/images/pb.png"
import imageThree from "../../../content/images/unico.png"
import imageFour from "../../../content/images/nmsi.png"
import BackgroundDisplay from "./background-display"

const width = "100%",
  height = "35rem"

const Container = styled.section`
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
  margin: 0 auto;
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`
const Dots = styled.div`
  text-align: center;
  width: ${width};
  z-index: 100;
  background: #f2f2f2;
  color: #ff9800;
`

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #ff9800;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  color: #ff9800;
  user-select: none;
  left: ${props => (props.right ? "90%;" : "0%;")};
`

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>{children}</Children>
    <Arrow onClick={handleClick} data-position={position - 1}>
      {"<"}
    </Arrow>
    <Arrow right onClick={handleClick} data-position={position + 1}>
      {">"}
    </Arrow>
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

export default props => (
  <Carousel>
    <Slide right>
      <BackgroundDisplay
        src={imageOne}
        header={props.header}
        description={props.description}
      ></BackgroundDisplay>
    </Slide>
    <Slide right>
      <BackgroundDisplay
        src={imageTwo}
        header={props.header}
        description={props.description}
      ></BackgroundDisplay>
    </Slide>
    <Slide right>
      <BackgroundDisplay
        src={imageThree}
        header={props.header}
        description={props.description}
      ></BackgroundDisplay>
    </Slide>
    <Slide right>
      <BackgroundDisplay
        src={imageFour}
        header={props.header}
        description={props.description}
      ></BackgroundDisplay>
    </Slide>
  </Carousel>
)
