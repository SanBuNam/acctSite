import React from "react"
import { Link } from "gatsby"
import styles from "./existing-website.module.scss"

const ExistingWebsite = () => {
  return (
    <div className={styles.container}>
      <h5>Improving, maintaining & fixing nasty little bugs</h5>
      <h4>Web development for existing websites</h4>
      <p className={styles.middeText}>
        If you need a freelance web developer for improvements, urgent fixes or
        continued support to your existing site, I can help.
      </p>
      <p className={styles.middeText}>
        If your site uses JavaScript, React, Node.js, Craft CMS or if you
        require a fullstack Developer, I’m happy to provide you with an estimate
        for the work. Or simply choose from one of my website maintenance
        packages.
      </p>
      <p>
        Read about{" "}
        <Link to="/service-types/website-design/">
          Website maintenance packages
        </Link>{" "}
        or <Link to="/contact/">contact me</Link>
      </p>
    </div>
  )
}

export default ExistingWebsite
