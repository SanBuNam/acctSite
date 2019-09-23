import React from "react"
import styles from "./existing-website.module.scss"

const ExistingWebsite = () => {
  return (
    <div className={styles.container}>
      <h5>Improving, maintaining & fixing nasty little bugs</h5>
      <h4>Web development for existing websites</h4>
      <p>
        If you need a freelance web developer for improvements, urgent fixes or
        continued support to your existing site, I can help.
      </p>
      <p className={styles.middeText}>
        If your site uses PHP, Craft CMS, Wordpress or if you require a Drupal
        Developer, I’m happy to provide you with an estimate for the work. Or
        simply choose from one of my website maintenance packages.
      </p>
      <p>
        Read about <span>Drupal maintenance packages</span> or{" "}
        <span>contact me</span>
      </p>
    </div>
  )
}

export default ExistingWebsite
