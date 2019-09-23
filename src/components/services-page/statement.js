import React from "react"
import styles from "./statement.module.scss"

const Statement = () => {
  return (
    <div className={styles.container}>
      <h5>
        “My development career goes back to my school days when I was only 13.
        Turning a sketch into something fun and beautiful was amazing — and it
        still is.”
      </h5>
      <p>
        With over 15 years experience I have a very good Understanding of what
        is involved in creating a great site.
      </p>
      <p>
        Learn more <span>approach, recent projects</span> or{" "}
        <span>about me.</span>
      </p>
    </div>
  )
}

export default Statement
