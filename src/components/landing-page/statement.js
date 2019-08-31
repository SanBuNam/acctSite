import React from "react"
import styles from "./statement.module.scss"

const Statement = () => {
  return (
    <div className={styles.container}>
      <h5>
        “My development career goes back to my school days when I was only 13.
        Delivering News Paper. Turning a sketch into something fun and beautiful
        was amazing — and it still is.”
      </h5>

      <p>
        Every bit of that same enthusiasm is still there. Although, now I design
        solutions and hand code them.
        <br />
        Learn more <span>about me</span> or <span>the approach I take.</span>
      </p>
    </div>
  )
}

export default Statement
