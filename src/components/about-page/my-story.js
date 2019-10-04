import React, { Fragment } from "react"
import styles from "./my-story.module.scss"

const ProcessIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.myStory}>
        <div className={styles.picture}>
          <img alt="random1" src={"https://source.unsplash.com/500x350/?"} />
        </div>
        <div className={styles.paragraph}>
          <Fragment>
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
              cogomorant companies same corp as samsung corp. I received
              above-average grades as an IT Specialist in System Integration. I
              thoroughly enjoyed the technical aspects of that job, but I knew
              that my passion was in the web.
            </p>
            <p>
              I later moved to USA and began work with a small start-up in not
              here Media. I gained precious experience in this role. I worked
              independently and drove new ideas even as I learned invaluable
              business and sales skills from my talented mentors.
            </p>
          </Fragment>
          <Fragment>
            <img
              className={styles.floatRight}
              alt="random1"
              src={"https://source.unsplash.com/150x100/?"}
            />
            <p>
              identity, financial reports and websites. As the sole developer on
              my team, I improved fast. I also learned about typography, great
              design and business strategy.
            </p>
          </Fragment>
          <br />
          <Fragment>
            <img
              className={styles.floatLeft}
              alt="random1"
              src={"https://source.unsplash.com/200x100/?"}
            />
            <p>
              I later moved to England and began work with a small start-up in
              Devon called eCards Media. I gained precious experience in this
              role. I worked independently and drove new ideas even as I learned
              invaluable business and sales skills mentors.
            </p>
          </Fragment>
          <p>
            identity, financial reports and websites. As the sole developer on
            my team, I improved fast. I also learned about typography, great
            design and business strategy.
          </p>
          <br />
          <div className={styles.middleGrid}>
            <img
              className={styles.floatMiddle}
              alt="random1"
              src={"https://source.unsplash.com/150x100/?"}
            />
            <img
              className={styles.floatMiddle}
              alt="random1"
              src={"https://source.unsplash.com/150x100/?"}
            />
            <img
              className={styles.floatMiddle}
              alt="random1"
              src={"https://source.unsplash.com/150x100/?"}
            />
          </div>
          <br />
          <h3>Samsung Electronic</h3>
          <p>
            The ability to combine technical knowledge with creativity is what
            enticed me to this field. My passion for web design began early, at
            the age of 14, when I developed and designed my school’s website and
            test newspaper.
          </p>
          <p>
            identity, financial reports and websites. As the sole developer on
            my team, I improved fast. I also learned about typography, great
            design and business strategy.
          </p>
          <p>
            It’s not only about the big clients. Throughout my career I’ve also
            managed many smaller projects. I became a freelance web developer in
            2011 because I decided to reside in <span>Orange County</span> and
            meet like-minded people.
          </p>
          <p>My clients are based both in the USA and all across the world.</p>
          <p>
            If you’d like to discuss working together with me, give me a call on{" "}
            <span>714-270-7255</span> or drop me an email on{" "}
            <span>softdavidlee@gmail.com</span>
          </p>
        </div>
      </div>
      <div className={styles.skillSection}>
        <Fragment>
          <h4>Skill summary</h4>
          <p>Content Creation</p>
          <p>Design</p>
          <p>Front-end development</p>
          <p>Back-end development</p>
        </Fragment>
        <br />
        <div>
          15+ years commercial experience Involved in over 130 projects Worked
          with helping companies since 2004 with Team leading experiences.
        </div>
        <br />
        <Fragment>
          <h4>Tools of choice</h4>
          <p>Front-end </p>
          <p>Back- development</p>
          <p>Front-end development</p>
          <p>-end development</p>
          <br />
          <p>Front-end development</p>
          <p>development</p>
          <p>Front-end </p>
        </Fragment>
        <br />
        <Fragment>
          <h4>Technologies</h4>
          <p>CSS, HTML, JavaScript & SASS</p>
          <p>Bash scripts & Python</p>
          <p>-end development</p>
          <br />
          <p>Front-end development</p>
          <p>development</p>
          <p>Front-end </p>
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
        <div className={styles.middleGrid}>
          <img
            className={styles.floatMiddle}
            alt="random1"
            src={"https://source.unsplash.com/300x100/?"}
          />
        </div>
      </div>
    </div>
  )
}

export default ProcessIntro
