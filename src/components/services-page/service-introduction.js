import React from "react"
import styles from "./service-introduction.module.scss"

export default props => (
  <section className={styles.container}>
    <div>
      <h2 className={styles.title}>Web developer services</h2>
      <p className={styles.subtitle}>
        from <span>new websites</span> to{" "}
        <span>existing website maintenance.</span>
      </p>
    </div>
    <div className={styles.text}>
      <p>
        Over 10 years of experience I have a deep understanding of the ins and
        outs of developing a functioning website that matches the needs of your
        business. Need a simple fix to the current site? Or a new image gallery
        for your website? As a freelance web developer, I’m here to get it done
        for you.
      </p>
    </div>
  </section>
)
