import React from "react"
import styles from "./web-services.module.scss"

export default props => (
  <section className={styles.container} key={props.key}>
    <div>
      <h2 className={styles.title}>Web developer services</h2>
      <p className={styles.subtitle}>
        from <span>new websites</span> to{" "}
        <span>existing website maintenance.</span>
      </p>
    </div>
    <div className={styles.text}>
      <p>
        With 15+ years of experience I have a deep understanding of the ins and
        outs of developing a functioning website that matches the needs of your
        business. Need a simple fix to your WordPress site? Or a new image
        gallery for your Drupal site? As a freelance web developer, I’m here to
        get it done for you.
      </p>
    </div>
  </section>
)
