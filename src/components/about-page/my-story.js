import React, { Fragment } from "react"
import { Link } from "gatsby"
import styles from "./my-story.module.scss"
import CJfoodBanner from "../../../content/images/CJfoodBanner.jpeg"
import pbCafeBanner from "../../../content/images/pbCafeBanner.jpg"
import Gatsbyjs from "../../../content/images/david-sign.jpeg"

const ProcessIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.columnLeft}>
          <div className={styles.picture}>
            <img alt="random1" src={CJfoodBanner} />
          </div>
          <div className={styles.myStory}>
            <p>
              I am an Orange County-based freelance web developer and designer
              with more than 15 years of experience working on websites and
              apps, including 8 years developing ERP systems. My background in
              IT and development covers a range of sectors, from charity to
              agency work to e-commerce. That experience, along with my passion
              for travel, mean I have the expertise to take on most projects.
            </p>
            <p>
              Growing up in South Korea, I successfully completed an
              apprenticeship for CJ Corp., one of South Korea’s largest
              conglomerate company which later founded Samsung Electronic Inc. I
              received above-average grades as an IT Specialist in System
              Integration. I thoroughly enjoyed the technical aspects of that
              job, but I knew that my passion was in the web.
            </p>
            <p>
              I later moved to USA and began work with a small start-up in not
              here Media. I gained precious experience in this role. I worked
              independently and drove new ideas even as I learned invaluable
              business and sales skills from my talented mentors.
            </p>
            <div className={styles.imgs}>
              <p>
                identity, financial reports and websites. As the sole developer
                on my team, I improved fast. I also learned about typography,
                great design and business strategy.
              </p>
              <img
                className={styles.floatLeft}
                alt="random1"
                src={CJfoodBanner}
              />
              <p>
                I later moved to USA and began work with a small start-up in
                California called Butterfly Media. I gained precious experience
                in this role. I worked independently and drove new ideas even as
                I learned invaluable business and sales skills mentors.
              </p>
              <p>
                identity, financial reports and websites. As the sole developer
                on my team, I improved fast. I also learned about typography,
                great design and business strategy.
              </p>
            </div>

            <div className={styles.middleGrid}>
              <img
                className={styles.floatMiddle}
                alt="random1"
                src={pbCafeBanner}
              />
            </div>
            <h3>CJ Foods & Paris Baguette</h3>
            <p>
              The ability to combine technical knowledge with creativity is what
              enticed me to this field. My passion for web design began early,
              at the age of 14, when I developed and designed my school’s
              website and test newspaper.
            </p>
            <p>
              identity, financial reports and websites. As the sole developer on
              my team, I improved fast. I also learned about typography, great
              design and business strategy.
            </p>
            <p>
              It’s not only about the big clients. Throughout my career I’ve
              also managed many smaller projects. I became a freelance web
              developer in 2011 to reside in <Link to="/">Orange County</Link>{" "}
              and meet like-minded people.
            </p>
            <p>
              My clients are based both in the USA and all across the world.
            </p>
            <p>
              If you’d like to discuss working together with me, give me a call
              on <Link to="contact">714-270-7255</Link> or drop me an email on{" "}
              <Link to="contact">softdavidlee@gmail.com</Link>
            </p>
          </div>
        </div>

        <div className={styles.columnRight}>
          <Fragment>
            <h4>Skill summary</h4>
            <ul>
              <li>Graphic Design & Logos</li>
              <li>Business Contents Creation</li>
              <li>Web Design and Development</li>
              <li>Search Engine Optimization</li>
              <li>CMS and E-commerce</li>
              <li>Web Hosting</li>
              <li>Website update and maintenance</li>
              <li>Website review and Critique</li>
            </ul>
          </Fragment>
          <br />
          <Fragment>
            15+ years commercial experience Involved in over 130 projects Worked
            with helping companies since 2004 with Team leading experiences.
          </Fragment>
          <br />
          <br />
          <img style={{ height: "15rem" }} alt="random1" src={Gatsbyjs} />
          <Fragment>
            <h4>Tools of choice</h4>
            <h5>Web development</h5>
            <p>React, Redux</p>
            <p>Gatsby, Craft CMS & Symfony</p>
            <p>GIT, Mac, Visual Studio Code</p>
            <br />
            <h5>Project management</h5>
            <p>JIRA & Confluence</p>
            <br />
            <h5>Web design & UX</h5>
            <p>Axure Pro, Adobe Photoshop & Illustrator</p>
            <br />
            <h5>Hosting</h5>
            <p>Ubuntu, CentOS & other unix</p>
            <br />
            <h5>systems</h5>
            <p>Docker, Node.js, Vagrant Apache, Nginx</p>
          </Fragment>
          <br />
          <Fragment>
            <h5>Technologies</h5>
            <p>PHP & MySQL</p>
            <p>CSS, HTML, JavaScript & SASS</p>
            <p>Bash scripts & Python</p>
          </Fragment>
          <br />
          <Fragment>
            <h4>Integrations</h4>
            <p>
              Salesforce, SAP, Amazon AWS,
              <br />
              Stripe,Worldpay, Paypal,
              <br />
              Eventbrite, CiviCRM, HubSpot
            </p>
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default ProcessIntro
