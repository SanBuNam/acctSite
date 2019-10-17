import React from "react"
import Styles from "./navbar.module.scss"
import { Link } from "gatsby"
import Modal from "./modalLayout"

const Navbar = () => (
  <div className={Styles.navigation}>
    <ul>
      <li className={Styles.downArrow}>
        <Modal />
      </li>
      <li>
        <Link to="/process/">Approach</Link>
      </li>
      <li>
        <Link to="/about/">About me</Link>
      </li>
      <li>
        <Link to="/pricing/">Prices</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
