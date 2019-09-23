import React from "react"
import styles from "./about-me.module.scss"

export default props => (
  <section className={styles.container} key={props.key}>
    <div>
      <h2 className={styles.title}>About David</h2>
    </div>
    <div className={styles.text}>
      <p>
        Hi I’m David, a freelance web developer based in California,
        specializing in building exceptional, bespoke websites using Drupal or
        Craft CMS, as well as complex web apps with custom logic.
      </p>
    </div>
  </section>
)
