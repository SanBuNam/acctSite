import React from "react"
import { Link } from "gatsby"
import styles from "./terms-header.module.scss"

export default props => (
  <section className={styles.container} key={props.key}>
    <div>
      <h2 className={styles.title}>Terms & Conditions</h2>
    </div>
    <div className={styles.text}>
      <h5>Here to cover the basics and protect all parties involved.</h5>
      <p>
        Something not clear? I'll be happy to help. Simply{" "}
        <Link to="/contact/">get in touch</Link> if you have any questions.
      </p>
    </div>
  </section>
)
