import React from "react"
import { Link } from "gatsby"
import styles from "./article.module.scss"

export default props => (
  <Link to={props.to}>
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
          <p className={styles.name}>{props.keywords}</p>
        </div>
        <div className={styles.excerpt}>{props.excerpt}</div>
      </div>
    </article>
  </Link>
)
