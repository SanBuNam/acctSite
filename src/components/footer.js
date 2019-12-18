import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

export default () => (
  <footer className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.leftContainer}>
        <h3>About David</h3>
        <p>
          I‘m a freelance web developer in Orange County with 10+ years‘
          experience. My clients come from Orange County and all over the world.
          <br />
          <br />
          Learn more <Link to="/about/">about me</Link>,{" "}
          <Link to="/approach/">my approach</Link> or{" "}
          <Link to="/pricing/">web development services</Link>.
        </p>
        <h3>Learn more about my work</h3>
        <Link to="/process/">My approach</Link>
        <br />
        <Link to="/blogs/">Blogs</Link>
        <br />
        <Link to="/pricing/">Pricing</Link>
        <br />
        <Link to="/contact/">Contact me</Link>
      </div>
      <div className={styles.midContainer}>
        <div>
          <div>
            <h3>My Services</h3>
            <Link to="/pricing/">Web Design & Development Services</Link>
            <br />
            <Link to="/service-types/website-hosting/">Web Hosting</Link>
            <br />
            <Link to="/service-types/website-update/">
              Update and maintenance
            </Link>
            <br />
            <Link to="/service-types/search-engine-optimization/">
              Search Engine Optimization
            </Link>
            <br />
            <Link to="/service-types/social-media-marketing/">
              Social Media Marketing
            </Link>
            <br />
            <Link to="/service-types/website-review-critique/">
              Website review critique
            </Link>
            <br />
            <Link to="/service-types/content-management/">
              CMS & E - Commerce
            </Link>
            <br />
          </div>
          <div>
            <h3>Maintenance & Support</h3>
            <Link to="/pricing/">Hosting, Maintenance and Support</Link>
          </div>
          <div>
            <h3>Quick links</h3>
            <Link to="/privacy-notice/">Privacy notice</Link>
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
            me an email <Link to="/contact/">main@davidcreativestudio.com</Link>
            .
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
      <div className={styles.address}>
        <Link to="/">
          <p>© {new Date().getFullYear()}, David's Creative Studio, LLC.</p>
        </Link>
      </div>
    </div>
  </footer>
)
