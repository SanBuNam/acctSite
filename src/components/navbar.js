import React from "react"
import Styles from "./navbar.module.scss"
import { Link } from "gatsby"
import Modal from "./modalLayout"

const Navbar = () => (
  <div className={Styles.navigation}>
    <ul>
      <li className={Styles.downArrow} style={{ cursor: "pointer" }}>
        <Modal />
      </li>
      <li>
        <Link to="/process/">My approach</Link>
      </li>
      <li>
        <Link to="/blogs/">Blogs</Link>
      </li>
      <li>
        <Link to="/about/">About me</Link>
      </li>
      <li>
        <Link to="/pricing/">Development</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
