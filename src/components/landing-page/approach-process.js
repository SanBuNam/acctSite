import React, { Fragment } from "react"
import styled from "styled-components"
import "./Approach-Process.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressBook,
  faToolbox,
  faTasks,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
// import Fade from "react-reveal/Fade"

const ContainerDiv = styled.section`
  padding: 3rem auto;
  margin: 3rem auto;
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-content: space-around;
  background-color: #171e2b;
  align-items: center;
  justify-items: center;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    grid-row-gap: 50px;
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    max-width: 600px;
    justify-items: center;
    grid-row-gap: 50px;
  }
  @media (max-width: 650px) {
    max-width: 550px;
    grid-row-gap: 25px;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`

const Container = () => {
  const frontOne = { background: "#FF9800", color: "#ffffff" }
  const backOne = { background: "#FF9800", color: "#F2F2F2" }
  const frontTwo = { background: "#263248", color: "#7e8aa2" }
  const backTwo = { background: "#263248", color: "#7e8aa2" }
  const frontThree = { background: "#7e8aa2", color: "#263248" }
  const backThree = { background: "#7e8aa2", color: "#263248" }
  const frontFour = { background: "#000000", color: "ffffff" }
  const backFour = { background: "#ffffff", color: "#0c1d41" }

  return (
    <ContainerDiv>
      <div className="card">
        <div className="card__side card__side--front" style={frontOne}>
          <FontAwesomeIcon spin={false} size="5x" icon={faAddressBook} />
          <h4 className="heading">Get In Touch</h4>
        </div>
        <div className="card__side card__side--back" style={backOne}>
          <div className="cardText">
            <Fragment>
              <p className="subtitle">In person meeting</p>
              <p className="desc">I'm in Orange County, CA</p>
            </Fragment>
            <Fragment>
              <p className="subtitle">Phone & Email</p>
              <p className="desc">
                714) 270 - 7255 <br />
                main@davidcreativestudio.com
              </p>
            </Fragment>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__side card__side--front" style={frontTwo}>
          <FontAwesomeIcon spin={false} size="5x" icon={faToolbox} />
          <h4 className="heading">Tools</h4>
        </div>
        <div className="card__side card__side--back" style={backTwo}>
          <div className="cardText">
            <p className="subtitle">Project Management</p>
            <p className="desc">JIRA & Confluence</p>
            <p className="subtitle">Design/UX</p>
            <p className="desc">Adobe Photoshop, Illustrator & Final Cut Pro</p>
            <p className="subtitle">Development</p>
            <p className="desc">React & Craft CMS</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__side card__side--front" style={frontThree}>
          <FontAwesomeIcon spin={false} size="5x" icon={faGlobe} />
          <h4 className="heading">Experience</h4>
        </div>
        <div className="card__side card__side--back" style={backThree}>
          <div className="cardText">
            <p className="subtitle">Back-end</p>
            <p className="desc">Node.js, MongoDB & MySQL</p>
            <p className="subtitle">Front-end</p>
            <p className="desc">HTML CSS/SASS, JavaScript & React</p>
            <p className="subtitle">Hosting & Infrastructure</p>
            <p className="desc">Unix, GIT, Docker/Vagrant</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__side card__side--front" style={frontFour}>
          <FontAwesomeIcon spin={false} size="5x" icon={faTasks} />
          <h4 className="heading">Projects</h4>
        </div>
        <div className="card__side card__side--back" style={backFour}>
          <div className="cardText">
            <p className="subtitle">US Contracts</p>
            <p className="desc">Providing value beyond development</p>
            <p className="subtitle">Projects</p>
            <p className="desc">
              International From USA, Japan, S. Korea to UK
            </p>
          </div>
        </div>
      </div>
    </ContainerDiv>
  )
}
export default Container
