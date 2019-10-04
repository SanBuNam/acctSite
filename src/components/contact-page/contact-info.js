import React, { Fragment } from "react"
import styles from "./contact-info.module.scss"

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <Fragment>
        <button>🗯️ Chat with me, I'm online!</button>
        <hr align="left" width="300px" />
      </Fragment>
      <div className="phone">
        If you have an urgent enquiry please feel free to leave a voice mail,
        text me on <span>714-270-7255</span> or send me message using the form
        and I will do my best to get back to you as soon as possible.
        <hr align="left" width="300px" />
      </div>
      <div>
        <h3>Contact details</h3>
        <p>
          Contact number: <span>714-270-7255</span>
        </p>
        <p>
          Email: <span>softDavidLee@gmail.com</span>
        </p>
        <hr align="left" width="300px" />
      </div>
      <div>
        <h3>Where I work</h3>
        <p>
          I frequently work in the city of California and am based in Orange
          County, California
        </p>
        <hr align="left" width="300px" />
      </div>
    </div>
  )
}

export default ContactInfo
