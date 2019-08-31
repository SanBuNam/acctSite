import React from "react"
import styles from "./statement.module.scss"

const Statement = () => {
  return (
    <div className={styles.container}>
      <h5>
        “David is quick to understand detailed technical issues and at the same
        time is able to step back and see the bigger business concerns, this
        makes him an extremely effective developer.…”
      </h5>

      <p>
        Learn about{" "}
        <span>my approach to design, web development and working with you</span>
      </p>
    </div>
  )
}

export default Statement
