import React from "react"
import Styles from "./navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => (
  <div className={Styles.navigation}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services/">Services</Link>
      </li>
      <li>
        <Link to="/about/">About Us</Link>
      </li>
      <li>
        <Link to="/clients/">Our Clients</Link>
      </li>
      <li>
        <Link to="/contact/">Contact Us</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
