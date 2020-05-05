import React from "react"
import styles from "./contact-me.module.scss"

export default props => (
  <section className={styles.container} key={props.key}>
    <div>
      <h2 className={styles.title}>Contact David</h2>
    </div>
    <div className={styles.text}>
      <p>
        If you are interested in working together or wish to find out more about
        what I can help with, use one of the below methods to get in touch with
        me.
      </p>
    </div>
  </section>
)
