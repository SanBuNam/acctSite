import React, { Fragment } from "react"
import styles from "./contact-info.module.scss"

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <hr align="left" width="300px" />
      <div className="phone">
        If you have an urgent enquiry please feel free to leave a voice mail,
        text me on{" "}
        <a href="tel:714-270-7255">
          <span>714-270-7255</span>
        </a>{" "}
        or send me message using the form and I will do my best to get back to
        you as soon as possible.
        <hr align="left" width="300px" />
      </div>
      <div>
        <h3>Contact details</h3>
        Contact number: <a href="tel:714-270-7255">714-270-7255</a>
        <br />
        <br />
        Email:{" "}
        <a href="mailto: davidlee@davidcreativestudio.com">
          creator@davidcreativestudio.com{" "}
        </a>
        <hr align="left" width="300px" />
      </div>
      <div>
        <h3>Where I work</h3>
        <p>
          I frequently work in the city of California and am based in Orange
          County, California.
        </p>
        <hr align="left" width="300px" />
      </div>
    </div>
  )
}

export default ContactInfo
