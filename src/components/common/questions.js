import React from "react"
import { Link } from "gatsby"
import styles from "./questions.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeadset,
  faQuestionCircle,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons"

const Container = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <FontAwesomeIcon
        className={styles.fontAwesome}
        spin={false}
        size="5x"
        icon={faQuestionCircle}
      />
      <div>
        <Link to="/process/">
          <h5>Questions?</h5>
        </Link>
        <p>
          Head over to the frequently asked web development questions to find
          some answers.
        </p>
      </div>
    </div>
    <div className={styles.innerContainer}>
      <FontAwesomeIcon
        className={styles.fontAwesome}
        spin={false}
        size="5x"
        icon={faCommentsDollar}
      />
      <div>
        <Link to="/pricing/">
          <h5>Prices</h5>
        </Link>
        <p>
          Learn about how I estimate web projects or request a free estimate for
          yours.
        </p>
      </div>
    </div>
    <div className={styles.innerContainer}>
      <FontAwesomeIcon
        className={styles.fontAwesome}
        spin={false}
        size="5x"
        icon={faHeadset}
      />
      <div>
        <Link to="/contact/">
          <h5>Want to work with me?</h5>
        </Link>
        <p>Great! Simply get in touch & we can discuss the next steps.</p>
      </div>
    </div>
  </div>
)

export default Container
