import React from "react"
import { Link } from "gatsby"
import styles from "./serivce-statement.module.scss"

const Statement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h5>
          “You can compare creating a website to building a house. From blue
          prints, foundation to furnishings and final touches. It is all hands
          on deck in order for it to all come together.”
        </h5>
        <p>
          With over 15 years experience I have a very good Understanding of what
          is involved in creating a great site.
        </p>
        <p>
          Learn more <Link to="/process/">my approach</Link> or{" "}
          <Link to="/about/">about me.</Link>
        </p>
      </div>
    </div>
  )
}

export default Statement
