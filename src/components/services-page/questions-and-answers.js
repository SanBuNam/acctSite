import React from "react"
import { Link } from "gatsby"
import styles from "./questions-and-answers.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeadset,
  faQuestionCircle,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons"

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h4>How, why, when and what?</h4>
        <h3>Answers to your questions</h3>
        <div className={styles.leftContainer}>
          <div>
            <h5>How does payment work?</h5>
            <p>
              The time and cost of a project is estimated upfront. To secure my
              availability I ask for a deposit of 30%. The rest is invoiced in
              two instalments during the project. For large projects I am happy
              to provide flexible payment options.
            </p>
            <Link to="/blogs/benefits-having-website/">
              Find out what you get with your website
            </Link>
          </div>
          <br />
          <div>
            <h5>What do I get with my website or web application?</h5>
            <p>
              Building a site or web app is as much about the process as it as
              about the finished site. There are number of services you may want
              included with your website project, including hosting, maintaining
              and keeping your site secure to analysing traffic and knowing who
              your visitors are.
            </p>
            <p>
              Every project automatically comes with a sprint board to manage
              tasks, set up of your site with your hosting provider, SEO
              optimisation where applicable, daily or weekly updates, optional
              support documents tailored to you and Google analytics setup.
              Additional services can include monthly maintenance, advanced SEO
              support and reporting and CRM integration.
            </p>
            <Link to="/blogs/blog-marketing/">
              Learn how to market your small business
            </Link>
          </div>
          <br />
          <div>
            <h5>How do you estimate the time and cost of a project?</h5>
            <p>
              The length of time it takes to complete a project depends on your
              requirements. We’ll define the requirements together based on the
              nature of your business and what you’re trying to achieve.
            </p>
            <p>
              I will provide you an initial estimate upfront for free. This will
              be a rough range. If you are happy with the estimate you can then
              proceed by having me create a proposal for you.
            </p>
            <Link to="/blogs/Optimize-business-website/">
              Learn how Optimize your small business website.
            </Link>
          </div>
          <br />
        </div>
        <div className={styles.rightContainer}>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              spin={false}
              size="5x"
              icon={faQuestionCircle}
            />
            <div>
              <Link to="/process/">
                <h5>Questions?</h5>
              </Link>
              <p>
                There is a treasure trove of answers just for you. Head over to
                the frequently asked web development questions to find some
                answers.
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              spin={false}
              size="5x"
              icon={faCommentsDollar}
            />
            <div>
              <Link to="/pricing/">
                <h5>Prices</h5>
              </Link>
              <p>
                Want to know how much a project costs? Learn about how I
                estimate web projects or request a free estimate for yours.
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              spin={false}
              size="5x"
              icon={faHeadset}
            />
            <div>
              <Link to="/contact/">
                <h5>Want to work with me?</h5>
              </Link>
              <p>Great! Simply get in touch & we can discuss the next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Container
