import React from "react"
import styles from "./introductionText.module.scss"

const MyApproach = () => {
  return (
    <div className={styles.container}>
      <h4>WE'RE ALWAYS</h4>
      <h3>RAISING THE BAR</h3>
      <p className={styles.paragraph}>
        At Lee & Co., Accountancy Corporation, we are more than accountants. 
        We are trusted advisors who are invested in Orange County, CA 
        whether it’s family-owned, privately-owned, or a national corporation. 
        We focus on delivering personalized solutions to grow your bottom line.
      </p>
      <a>MORE ABOUT US</a>
    </div>
  )
}

export default MyApproach
