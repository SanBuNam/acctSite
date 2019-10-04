import React from "react"
import styles from "./serivce-statement.module.scss"

const Statement = () => {
  return (
    <div className={styles.container}>
      <h5>
        “You can compare creating a website to building a house. From blue
        prints, foundation to furnishings and final touches. It is all hands on
        deck in order for it to all come together.”
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
