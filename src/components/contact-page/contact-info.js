import React from "react"
import styles from "./contact-info.module.scss"

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <h2>Contact Information</h2>
      <br />
      <div className="phone">
        <p>
          If you have an urgent enquiry please feel free to leave a voice mail,
          text me on{" "}
          <a href="tel:714-270-7255">
            <span>714-270-7255</span>
          </a>{" "}
          or send me message using the form and I will do my best to get back to
          you as soon as possible.
        </p>
        <hr width="100%" />
      </div>
      <div>
        <h3>Contact details</h3>
        <p>
          Contact number: <a href="tel:714-270-7255">714-270-7255</a>
          <br />
          <br />
          Email:{" "}
          <a href="mailto: davidlee@davidcreativestudio.com">
            main@davidcreativestudio.com{" "}
          </a>
        </p>
        <hr width="100%" />
      </div>
      <div>
        <h3>Where I work</h3>
        <p>
          I frequently work in the city of California and am based in Orange
          County, California.
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
