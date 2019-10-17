import React from "react"
import styles from "./design-and-development.module.scss"

const Statement = () => (
  <div className={styles.container}>
    <div className={styles.bottomRow}>
      <div className={styles.inner}>
        <img alt="random1" src={"https://source.unsplash.com/100x100/?"} />
        <p>
          Is your current site not <span>bringing in business?</span> Does it
          need a <span className={styles.color}>new look?</span> Do you need
          help with <span className={styles.color}>maintenance</span>, or want
          to <span className={styles.color}>update it yourself?</span>{" "}
          <span className={styles.bolder}>
            There’s a solution for every budget
          </span>{" "}
          and our up front preparation guarantees great results.
        </p>
      </div>
      <div className={styles.inner}>
        <img alt="random1" src={"https://source.unsplash.com/100x100/?"} />
        <p>
          Web Developers Studio caters to businesses, professional services
          firms, and academics. We’ve also had great success with government,
          community, and religious groups.{" "}
          <span className={styles.bolder}>
            We achieve stellar search engine results for our clients.
          </span>
        </p>
      </div>
      <div className={styles.inner}>
        <img alt="random1" src={"https://source.unsplash.com/100x100/?"} />
        <p>
          Call David Lee, founder and lead developer of our in-house team, at{" "}
          <span className={styles.bolder}>(714) 270-7255</span> for a{" "}
          <span className={styles.color}>free 20 minute consultation</span>{" "}
          about your project. No matter what you decide, you'll find the
          information useful.
        </p>
      </div>
    </div>
  </div>
)

export default Statement
