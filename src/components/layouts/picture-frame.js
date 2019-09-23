import React from "react"
import { Link } from "gatsby"
import styles from "./picture-frame.module.scss"

export default props => (
  <article className={styles.articleBox} key={props.key}>
    <div>
      <div className={styles.left}>
        <img
          src={"https://source.unsplash.com/150x150/?" + props.keywords}
          alt={props.keywords}
        />
      </div>
      <div className={styles.right}>
        <h3>{props.name}</h3>
        <p className={styles.date}>{props.date}</p>
        <span className={styles.name}>{props.keywords}</span>
      </div>
      <div className={styles.excerpt}>{props.excerpt}</div>
    </div>
  </article>
)
