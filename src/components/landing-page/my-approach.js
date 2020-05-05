import React from "react"
import styles from "./my-approach.module.scss"

const MyApproach = () => {
  return (
    <div className={styles.container}>
      <h3>My approach</h3>
      <h4>Experience & Transparency</h4>
      <p className={styles.topParagraph}>
        Each website project is unique with its own set of challenges.
        <br />I treat each one with the same approach, respect, and dedication.
      </p>
      <br />
      <p className={styles.bottomParagraph}>
        I’ll work closely with you to make sure your project stays within budget
        and that we meet the agreed deadline. With every project,
        <br />
        <br />I strive to create an engaging, user-friendly website, built to
        convert and maximize your ROI.
        <br />I believe in transparency and honesty. This underlines everything
        I do.
      </p>
    </div>
  )
}

export default MyApproach
