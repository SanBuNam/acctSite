import React from "react"
import styles from "./work-history.module.scss"

export default props => (
  <section className={styles.container} key={props.key}>
    <h4>
      <span className={styles.title}>Looking to hire a Orange County, CA</span>
      <br />
      <span className={styles.subtitle}>Freelance Web Developer?</span>
    </h4>
    <div className={styles.textDiv}>
      <p>
        I create websites and applications, built to convert, improve business
        processes and maximize ROI here in Orange County, CA. <br />
      </p>
      <p>
        Over the last 15 years I’ve worked with Orange County-based companies
        such as{" "}
        <span>
          CJ Foods, Paris Baguettes, NMSI National Mortgage Group, Unico
          Logistics, Aldex America (POSCO){" "}
        </span>
        and many more small to large businesses.
      </p>
    </div>
  </section>
)
