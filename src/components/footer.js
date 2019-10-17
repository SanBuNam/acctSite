import React from "react"
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
          Learn more{" "}
          <span>about me, my approach or web development services.</span>
        </p>
        <p>© 2019. DTM Digital Ltd.</p>
      </div>
      <div className={styles.midContainer}>
        <div>
          <div>
            <h3>My Services</h3>
            <p>Freelance Web Development Services</p>
            <p>Web App Development</p>
            <p>Craft CMS developer</p>
            <p>Drupal Developer in Orange County</p>
          </div>
          <div>
            <h3>Maintenance & Support</h3>
            <p>Hosting, Maintenance and Support</p>
          </div>
          <div>
            <h3>Quick links</h3>
            <p>Frequently asked questions</p>
            <p>Privacy notice</p>
            <p>Cookies policy</p>
            <p>Terms & conditions</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <h3>Get in touch</h3>
          <p>
            Get in touch via <span>my contact form</span> or send me an email{" "}
            <span>SoftDavidLee@gmail.com</span>.
          </p>
          <p>Call me on 714 270 7255</p>
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
