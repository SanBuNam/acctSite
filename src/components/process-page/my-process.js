import React from "react"
import styles from "./my-process.module.scss"

export default props => (
  <section className={styles.container} key={props.key}>
    <div>
      <h2 className={styles.title}>My approach</h2>
    </div>
    <div className={styles.text}>
      <p>
        Experience, tools and talent are only half the story. The right approach
        and effective communication is critical to a successful project. Here’s
        my approach.
      </p>
    </div>
  </section>
)
