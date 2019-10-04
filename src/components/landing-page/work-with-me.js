import React from "react"
import styles from "./work-with-me.module.scss"
import TextButton from "../buttons/text-button"

const myApproachBox = () => {
  return (
    <section className={styles.container}>
      <h3>
        Want to work with me? <br />
        <span>Get in touch</span>
      </h3>
      <div className={styles.contactInfo}>
        <div className={styles.sides}>
          <h5>Contact Work</h5>
          <img alt="random1" src={"https://source.unsplash.com/50x50/?"} />
          <TextButton text="Enquire" />
        </div>
        <div className={styles.middle}>
          <h5>Projects</h5>
          <img alt="random1" src={"https://source.unsplash.com/50x50/?"} />
          <TextButton text="Request an estimate" />
        </div>
        <div className={styles.sides}>
          <h5>Existing Projects</h5>
          <img alt="random1" src={"https://source.unsplash.com/50x50/?"} />
          <TextButton text="Contact me" />
        </div>
      </div>
    </section>
  )
}

export default myApproachBox
