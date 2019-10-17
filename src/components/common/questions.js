import React from "react"
import styles from "./questions.module.scss"

const Container = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <div>
        <img alt="random1" src={"https://source.unsplash.com/100x100/?"} />
      </div>
      <div>
        <h5>Questions?</h5>
        <p>
          Head over to the frequently asked web development questions to find
          some answers.
        </p>
      </div>
    </div>
    <div className={styles.innerContainer}>
      <div>
        <img alt="random1" src={"https://source.unsplash.com/100x100/?"} />
      </div>
      <div>
        <h5>Prices</h5>
        <p>
          Learn about how I estimate web projects or request a free estimate for
          yours.
        </p>
      </div>
    </div>
    <div className={styles.innerContainer}>
      <div>
        <img alt="random1" src={"https://source.unsplash.com/100x100/?"} />
      </div>
      <div>
        <h5>Want to work with me?</h5>
        <p>Great! Simply get in touch & we can discuss the next steps.</p>
      </div>
    </div>
  </div>
)

export default Container
