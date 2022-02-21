import React from "react"
import styles from "./work-history.module.scss"

export default () => (
  <div className={styles.container}>
    <h4>
      <span className={styles.title}>Looking to hire a Orange County, CA</span>
      <br />
      <span className={styles.subtitle}>Website or Online Store Builder?</span>
    </h4>
    <div className={styles.textDiv}>
      <p>
        I create websites and applications, built to convert, improve business
        processes and maximize ROI.
        <br />
      </p>
      <p>
        Over the last 10 years, I’ve worked with Orange County-based companies
        such as{" "}
        <a href="https://www.cjfoods.com/" target="_blank">
          CJ Foods
        </a>
        ,{" "}
        <a href="https://parisbaguette.com/" target="_blank">
          Paris Baguettes
        </a>
        ,{" "}
        <a href="https://www.nmsigroup.com/" target="_blank">
          NMSI National Mortgage Group
        </a>
        ,{" "}
        <a href="http://www.unicologx.com/" target="_blank">
          Unico Logistics
        </a>{" "}
        and many more small to large businesses.
      </p>
    </div>
  </div>
)
