import React from "react"
import { Link } from "gatsby"
import styles from "./my-story.module.scss"
import programmer from "../../../content/images/gorillalogo.jpg"
import laughing from "../../../content/images/laughing.jpeg"

const ProcessIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.columnLeft}>
          <div className={styles.picture}>
            <img alt="programmer" src={programmer} />
          </div>
          <div className={styles.myStory}>
            <p>
              I am an Orange County-based freelance web developer and designer
              with more than 10 years of experience, including 5 years ERP
              systems. My work in IT and development covers a range of sectors,
              from charity to agency work to e-commerce. That experience, along
              with my passion for travel, mean I have the expertise to take on
              most projects.
            </p>
            <p>
              Growing up in South Korea, I successfully completed an
              apprenticeship for CJ Corporation, one of South Korea’s largest
              conglomerate company which later founded Samsung Electronic Inc. I
              received above-average grades as an IT Specialist in System . I
              thoroughly enjoyed the technical aspects of that job, but I knew
              that my passion was in the web.
            </p>
            <h3>David's Creative Studio</h3>
            <div className={styles.pictureTwo}>
              <img alt="laughing-man" src={laughing} />
            </div>
            <p>
              I began work with a small start-up in Butterfly media here in
              Orange County, CA. I gained precious experience in this role. I
              worked independently and drove new ideas even as I learned
              invaluable business and sales skills from my talented mentors.
            </p>
            <p>
              identity, financial reports and websites. As the sole developer on
              my team, I improved fast. I also learned about typography, great
              design and business strategy.
            </p>

            <p>
              The ability to combine technical knowledge with creativity is what
              enticed me to this field. My passion for web design began early,
              when I developed and designed.
            </p>
            <p>
              It’s not only about the big clients. Throughout my career I’ve
              also managed many smaller projects. I became a freelance web
              developer in <Link to="/">Orange County</Link> and meet
              like-minded people.
            </p>
            <p>
              My clients are based both in the USA and all across the world.
            </p>
            <p>
              If you’d like to discuss working with me, give me a call on{" "}
              <Link to="contact">714-270-7255</Link> or drop me an email on{" "}
              <Link to="contact">main@davidcreativestudio.com</Link>
            </p>
          </div>
        </div>

        <div className={styles.columnRight}>
          <h4>Service summary</h4>
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
          <p
            style={{
              borderBottom: "1px solid lightGray",
              padding: "15px",
              width: "80%",
            }}
          ></p>
          <h4>Technologies & Tools of choice</h4>
          <h5>Web design & UX</h5>
          <ul>
            <li>Adobe XD</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
          <h5>Technologies</h5>
          <ul>
            <li>CSS, HTML, JavaScript & SASS</li>
            <li>React & ASP.net</li>
            <li>Node.js, C#, MySQL, postgreSQL, MongoDB</li>
          </ul>
          <h5>Frameworks, Hosting & Services</h5>
          <ul>
            <li>Gatsby</li>
            <li>Next.js</li>
            <li>ASP.net</li>
            <li>Github</li>
            <li>Shopify</li>
            <li>Netlify</li>
          </ul>
          <h5>Integrations</h5>
          <ul>
            <li>Stripe, Shopify, Paypal,</li>
            <li>Salesforce, SAP, Amazon AWS & etc.</li>
          </ul>
          <p>
            10+ years commercial experience Involved in over many big and small
            projects Worked with helping companies since 2005 with Team leading
            experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProcessIntro
