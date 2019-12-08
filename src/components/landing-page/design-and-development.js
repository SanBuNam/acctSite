import React from "react"
import { Link } from "gatsby"
import styles from "./design-and-development.module.scss"
import Bounce from "react-reveal/Bounce"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faUsersCog,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"

const Statement = () => (
  <div className={styles.container}>
    <div className={styles.bottomRow}>
      <Bounce left>
        <div className={styles.inner}>
          <FontAwesomeIcon
            className={styles.fontAwesome}
            spin={false}
            size="5x"
            icon={faLaptopCode}
          />
          <p>
            Is your current site not{" "}
            <Link to="/service-types/website-design/">
              bringing in business?
            </Link>{" "}
            Does it need a{" "}
            <Link to="/service-types/content-management/">new look?</Link> Do
            you need help with{" "}
            <Link to="/service-types/website-update/">maintenance</Link>, or
            want to <span className={styles.color}>update it yourself?</span>{" "}
            <span className={styles.bolder}>
              There’s a solution for every budget
            </span>{" "}
            and our upfront preparation guarantees great results.
          </p>
        </div>
      </Bounce>
      <Bounce bottom>
        <div className={styles.inner}>
          <FontAwesomeIcon
            className={styles.fontAwesome}
            spin={false}
            size="5x"
            icon={faUsersCog}
          />
          <p>
            Web Developers Studio caters to businesses, professional services
            firms, and academics. We’ve also had great success with government,
            community, and religious groups.{" "}
            <span className={styles.bolder}>
              We achieve stellar search engine results for our clients.
            </span>
          </p>
        </div>
      </Bounce>

      <Bounce right>
        <div className={styles.inner}>
          <FontAwesomeIcon
            className={styles.fontAwesome}
            spin={false}
            size="5x"
            icon={faMobileAlt}
          />
          <p>
            Call David Lee, founder and lead developer of our in-house team, at{" "}
            <Link to="/contact/">(714) 270-7255</Link> for a{" "}
            <Link to="/contact/">free 20-minute consultation</Link> about your
            project. No matter what you decide, you'll find the information
            useful.
          </p>
        </div>
      </Bounce>
    </div>
  </div>
)

export default Statement
