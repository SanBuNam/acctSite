import React, { Component } from "react"
import Modal from "./modal"
import styled from "styled-components"
import { Link } from "gatsby"

const ModalRoot = styled.ul`
  position: absolute;
  z-index: 999;
  top: 7.5rem;
  left: 65rem;
  background-color: #000;
  opacity: 0.75;
  list-style: none;
  padding: 0;
  cursor: pointer;
  li {
    cursor: pointer;
    text-align: left;
    padding: 1.25rem 10rem 1.25rem 2rem;
    font-size: 1.6rem;
  }
  a:link,
  a:visited {
    cursor: pointer;
    color: #ff9800;
    text-align: center;
    text-decoration: none;
    display: block;
  }
  a:hover,
  a:active {
    cursor: pointer;
    color: #ffffff;
  }
  a:link:active,
  a:visited:active {
    cursor: pointer;
    color: orange;
  }
  @media (max-width: 1880px) {
    left: 64rem;
  }
  @media (max-width: 1870px) {
    left: 62rem;
  }
  @media (max-width: 1860px) {
    left: 60rem;
  }
  @media (max-width: 1855px) {
    left: 59rem;
  }
  @media (max-width: 1850px) {
    left: 59rem;
  }
  @media (max-width: 1845px) {
    left: 59rem;
  }

  @media (max-width: 1840px) {
    left: 59rem;
  }
  @media (max-width: 1830px) {
    left: 58rem;
  }
  @media (max-width: 1820px) {
    left: 58rem;
  }
  @media (max-width: 1810px) {
    left: 58rem;
  }
  @media (max-width: 1800px) {
    left: 58rem;
  }
  @media (max-width: 1790px) {
    left: 58rem;
  }
  @media (max-width: 1780px) {
    left: 57rem;
  }
  @media (max-width: 1770px) {
    left: 56rem;
  }
  @media (max-width: 1760px) {
    left: 56rem;
  }
  @media (max-width: 1750px) {
    left: 55rem;
  }
  @media (max-width: 1740px) {
    left: 55rem;
  }
  @media (max-width: 1730px) {
    left: 53rem;
  }
  @media (max-width: 1720px) {
    left: 53rem;
  }
  @media (max-width: 1710px) {
    left: 53rem;
  }
  @media (max-width: 1700px) {
    left: 53rem;
  }
  @media (max-width: 1690px) {
    left: 52rem;
  }
  @media (max-width: 1680px) {
    left: 51rem;
  }
  @media (max-width: 1670px) {
    left: 50rem;
  }
  @media (max-width: 1660px) {
    left: 50rem;
  }
  @media (max-width: 1650px) {
    left: 50rem;
  }
  @media (max-width: 1640px) {
    left: 49rem;
  }
  @media (max-width: 1630px) {
    left: 48rem;
  }
  @media (max-width: 1620px) {
    left: 47rem;
  }
  @media (max-width: 1610px) {
    left: 47rem;
  }
  @media (max-width: 1600px) {
    left: 47rem;
  }
  @media (max-width: 1590px) {
    left: 47rem;
  }
  @media (max-width: 1580px) {
    left: 46rem;
  }
  @media (max-width: 1550px) {
    left: 46rem;
  }
  @media (max-width: 1540px) {
    left: 45rem;
  }
  @media (max-width: 1530px) {
    left: 44rem;
  }
  @media (max-width: 1520px) {
    left: 44rem;
  }
  @media (max-width: 1510px) {
    left: 44rem;
  }
  @media (max-width: 1500px) {
    left: 43rem;
  }
  @media (max-width: 1490px) {
    left: 43rem;
  }
  @media (max-width: 1480px) {
    left: 42rem;
  }
  @media (max-width: 1470px) {
    left: 41rem;
  }
  @media (max-width: 1440px) {
    left: 41rem;
  }
  @media (max-width: 1430px) {
    left: 40rem;
  }
  @media (max-width: 1420px) {
    left: 39rem;
  }
  @media (max-width: 1410px) {
    left: 39rem;
  }
  @media (max-width: 1400px) {
    left: 38rem;
  }
  @media (max-width: 1380px) {
    left: 37rem;
  }
  @media (max-width: 1350px) {
    left: 36rem;
  }
  @media (max-width: 1340px) {
    left: 35rem;
  }
  @media (max-width: 1300px) {
    left: 33rem;
  }
  @media (max-width: 1270px) {
    left: 32rem;
  }
  @media (max-width: 1250px) {
    left: 31rem;
  }
  @media (max-width: 1220px) {
    left: 30rem;
  }
  @media (max-width: 1200px) {
    left: 28rem;
  }
  @media (max-width: 1170px) {
    left: 32rem;
    li {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 1160px) {
    left: 31rem;
  }
  @media (max-width: 1120px) {
    left: 30rem;
  }
  @media (max-width: 1110px) {
    left: 29rem;
  }
  @media (max-width: 1075px) {
    left: 28rem;
  }
  @media (max-width: 1060px) {
    left: 27rem;
  }
  @media (max-width: 1035px) {
    left: 25rem;
  }
  @media (max-width: 995px) {
    left: 23rem;
  }
  @media (max-width: 970px) {
    left: 33rem;
    top: 6rem;
  }
  @media (max-width: 960px) {
    left: 31rem;
  }
  @media (max-width: 920px) {
    left: 29rem;
  }
  @media (max-width: 920px) {
    left: 29rem;
  }
  @media (max-width: 880px) {
    left: 27rem;
  }
  @media (max-width: 840px) {
    left: 25rem;
  }
  @media (max-width: 768px) {
    left: 4rem;
  }
  @media (max-width: 550px) {
    display: none;
  }
`

class ModalLayout extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render = () => (
    <div>
      <Modal open={this.state.showModal} onClose={this.toggleModal}>
        <ModalRoot>
          <Link to="/service-types/website-design/">
            <li>Website design and development</li>
          </Link>
          <Link to="/service-types/website-hosting/">
            <li>Web Hosting</li>
          </Link>
          <Link to="/service-types/website-update/">
            <li>Update and maintenance</li>
          </Link>
          <Link to="/service-types/search-engine-optimization/">
            <li>Search Engine Optimization</li>
          </Link>
          <Link to="/service-types/social-media-marketing/">
            <li>Social Media Marketing</li>
          </Link>
          <Link to="/service-types/website-review-critique/">
            <li>Website review critique</li>
          </Link>
          <Link to="/service-types/content-management/">
            <li>CMS & E - Commerce</li>
          </Link>
        </ModalRoot>
      </Modal>
      <a className="downArrow" onClick={this.toggleModal}>
        Services
      </a>
    </div>
  )
}

export default ModalLayout
