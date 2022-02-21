import React from "react"
import { Link } from "gatsby"
import styles from "./privacy-header.module.scss"

export default () => (
  <section className={styles.container}>
    <div className={styles.innerContainer}>
      <h2 className={styles.title}>Privacy notice</h2>
      <h5 className={styles.subtitle}>Thank you for taking the time to read my privacy notice.</h5>
      <p>
        I recognise the trust you place in me when you share your personal
        details with me. I believe in honesty and transparency with every person
        or company I deal with.
      </p>
      <br />
      <p>
        Here I provide you with details of the personal information I collect
        when I engage with you, how I will use and look after your personal
        information, your privacy rights and how the law protects you.
      </p>
    </div>
  </section>
)
