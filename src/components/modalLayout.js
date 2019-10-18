import React, { Fragment, Component } from "react"
import Modal from "./modal"
import styled from "styled-components"
import { Link } from "gatsby"

const ModalRoot = styled.ul`
  position: absolute;
  z-index: 999;
  top: 9rem;
  left: 40rem;
  background-color: #000;
  opacity: 0.75;
  list-style: none;
  padding: 0;
  cursor: pointer;
  li {
    cursor: pointer;
    text-align: left;
    padding: 1.25rem 10rem 1.25rem 2rem;
  }
  a:link,
  a:visited {
    color: #ff9800;
    text-align: center;
    text-decoration: none;
    display: block;
  }
  a:hover,
  a:active {
    color: #ffffff;
  }
  a:link:active,
  a:visited:active {
    color: orange;
  }

  .downArrow {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: none;
    -ms-word-break: normal;
    word-break: normal;
    transition: all 0.2s ease;
    ::before {
      color: orange;
      font-weight: 600;
      font-size: 2rem;
      content: ">";
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
      left: -22px;
      padding: 0 0 2px;
      position: absolute;
      pointer-events: none;
    }
  }

  .downArrow:hover {
    ::before {
      content: "<";
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }
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
