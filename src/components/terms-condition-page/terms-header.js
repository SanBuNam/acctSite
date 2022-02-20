import React from "react"
import { Link } from "gatsby"
import styles from "./terms-header.module.scss"

export default () => (
  <section className={styles.container}>
    <div className={styles.innerContainer}>
      <h2 className={styles.title}>Terms & Conditions</h2>
      <h5 className={styles.subtitle}>
        Here to cover the basics and protect all parties involved.
      </h5>
      <p>
        Something not clear? I'll be happy to help. Simply{" "}
        <Link to="/contact/">get in touch</Link> if you have any questions.
      </p>
    </div>
  </section>
)
