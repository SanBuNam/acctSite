import React from "react"
import { Link } from "gatsby"
import styles from "./statement.module.scss"

const Statement = () => (
  <div className={styles.container}>
    <h5>
      “My development career goes back to my school days when I was only 13.
      Turning a sketch into something fun and beautiful was amazing — and it
      still is.”
    </h5>
    <div className={styles.description}>
      <p>
        Every bit of that same enthusiasm is still there. Although, now I design
        solutions and hand-code them.
        <br />
        Learn more <Link to="/about/">about me</Link> or{" "}
        <Link to="/process/">the approach I take.</Link>
      </p>
    </div>
  </div>
)

export default Statement
