import React from "react"
import { Link } from "gatsby"
import styles from "./work-with-me.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faFileContract,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons"

const myApproachBox = () => (
  <div className={styles.container}>
    <h3>
      Want to work with me? <br />
      <span>Get in touch</span>
    </h3>
    <div className={styles.contactInfo}>
      <div className={styles.sides}>
        <h5>Contract Work</h5>
        <FontAwesomeIcon
          className={styles.fontAwesome}
          spin={false}
          size="4x"
          icon={faAddressCard}
        />
        <Link to="/contact/">
          <button>Enquire</button>
        </Link>
      </div>
      <div className={styles.middle}>
        <h5>Projects</h5>
        <FontAwesomeIcon
          className={styles.fontAwesome}
          spin={false}
          size="4x"
          icon={faFileContract}
        />
        <Link to="/pricing/">
          <button>Request an estimate</button>
        </Link>
      </div>
      <div className={styles.sides}>
        <h5>Existing Projects</h5>
        <FontAwesomeIcon
          className={styles.fontAwesome}
          spin={false}
          size="4x"
          icon={faMedkit}
        />
        <Link to="/contact/">
          <button>Contact me</button>
        </Link>
      </div>
    </div>
  </div>
)

export default myApproachBox
