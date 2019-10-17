import React from "react"
import styles from "./questions-and-answers.module.scss"

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
            <span>Learn what an estimate is and how payments work</span>
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
            <span>Find out what you get with your website</span>
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
            <span>
              Learn how projects are estimated or what an estimate and proposal
              are.
            </span>
          </div>
          <br />
        </div>
        <div className={styles.rightContainer}>
          <div>
            <img src="https://source.unsplash.com/400x100/?" alt="random" />
            <div>
              <h5>Questions?</h5>
              <p>
                There is a treasure trove of answers just for you. Head over to
                the frequently asked web development questions to find some
                answers.
              </p>
            </div>
          </div>
          <div>
            <img src="https://source.unsplash.com/400x100/?" alt="random" />
            <div>
              <h5>Prices</h5>
              <p>
                Want to know how much a project costs? Learn about how I
                estimate web projects or request a free estimate for yours.
              </p>
            </div>
          </div>
          <div>
            <img src="https://source.unsplash.com/400x100/?" alt="random" />
            <div>
              <h5>Want to work with me?</h5>
              <p>Great! Simply get in touch & we can discuss the next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Container
