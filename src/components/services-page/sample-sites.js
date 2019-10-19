import React from "react"
import styles from "./sample-sites.module.scss"

const Statement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.innerDiv}>
          <p>E-Commerce</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Real Estate</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Insurance</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Construction</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Restaurent</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Retail</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Professional Office</p>
        </div>
        <div className={styles.innerDiv}>
          <p>Freelancer</p>
        </div>
      </div>
    </div>
  )
}

export default Statement
