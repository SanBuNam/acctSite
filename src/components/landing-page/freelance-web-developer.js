import React from "react"
import styles from "./freelance-web-developer.module.scss"

export default props => (
  <section className={styles.container}>
    <h4>
      <span className={styles.title}>{props.title}</span>
      <br />
      <span className={styles.subtitle}>{props.subtitle}</span>
    </h4>
    <div className={styles.text}>{props.children}</div>
  </section>
)
