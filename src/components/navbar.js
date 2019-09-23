import React from "react"
import Styles from "./navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => (
  <div className={Styles.navigation}>
    <ul>
      <li className={Styles.downArrow}>
        <Link to="/services/">Service</Link>
      </li>
      <li>
        <Link to="/process/">Process</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/blog/">blog</Link>
      </li>
      <li>
        <Link to="/contact/">Contact Me</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
