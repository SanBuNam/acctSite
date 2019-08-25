import React from "react"
import Styles from "./navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => (
  <div className={Styles.navigation}>
    <ul>
      <li className={Styles.downArrow}>
        <Link href="/">Service</Link>
      </li>
      <li>
        <Link href="/process">Process</Link>
      </li>
      <li>
        <Link href="/blog">blog</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact Me</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
