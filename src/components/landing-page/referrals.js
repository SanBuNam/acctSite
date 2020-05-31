import React from "react"
import { Link } from "gatsby"
import styles from "./referrals.module.scss"
import WorkWithMe from "./work-with-me"
import Flip from "react-reveal/Flip"
import Zoom from "react-reveal/Zoom"

const Statement = () => {
  return (
    <div className={styles.container}>
      <WorkWithMe />
      <div className={styles.innerContainer}>
        <h5>
          “ David is quick to understand detailed technical issues and at the
          same time is able to step back and see the bigger business concerns,
          this makes him an extremely effective developer.… ”
        </h5>
        <p>
          Learn about{" "}
          <Link to="/process/">
            my approach to design, web development and working with you
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Statement
