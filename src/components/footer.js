import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

export default () => (
  <footer className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.leftContainer}>
        <h3>About David</h3>
        <p>
          I‘m a freelance web developer in Orange County with 15+ years‘
          experience. My clients come from Orange County and all over the world.
          <br />
          <br />
          Learn more <Link to="/about/">about me</Link>,{" "}
          <Link to="/approach/">my approach</Link> or{" "}
          <Link to="/pricing/">web development services</Link>.
        </p>
        <p>© 2019. DTM Digital Ltd.</p>
      </div>
      <div className={styles.midContainer}>
        <div>
          <div>
            <h3>My Services</h3>
            <Link to="/pricing/">Freelance Web Development Services</Link>
            <br />
            <Link to="/pricing/">Web App Development</Link>
            <br />
            <Link to="/pricing/">Craft CMS developer</Link>
            <br />
            <Link to="/pricing/">Custom Web Developer in Orange County</Link>
          </div>
          <div>
            <h3>Maintenance & Support</h3>
            <Link to="/pricing/">Hosting, Maintenance and Support</Link>
          </div>
          <div>
            <h3>Quick links</h3>
            <Link to="/pricing/">Frequently asked questions</Link>
            <br />
            <Link to="/pricing/">Privacy notice</Link>
            <br />
            <Link to="/terms-and-conditions/">Terms & conditions</Link>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <h3>Get in touch</h3>
          <p>
            Get in touch via <Link to="/contact/">my contact form</Link> or send
            me an email <Link to="/contact/">SoftDavidLee@gmail.com</Link>.
          </p>
          <p>
            Call me on <Link to="/contact/">714 270 7255</Link>
          </p>
          <p>
            I frequently work in the city of Los Angeles and am based in Orange
            County.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.address}>
      <div className={styles.addressText}>
        <p>© 2019. David's Creative Studio, LLC.</p>
      </div>
    </div>
  </footer>
)
