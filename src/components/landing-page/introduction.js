import React from "react"
import styles from "./introduction.module.scss"

export default props => (
  <section className={styles.container}>
    <h1>
      <span className={styles.title}>{props.title}</span>
      <br />
      <span className={styles.subtitle}>
        {props.subtitle}
      </span>
    </h1>
  </section>
)
