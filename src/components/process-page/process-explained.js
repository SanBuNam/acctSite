import React from "react"
import { Link } from "gatsby"
import styles from "./process-explained.module.scss"

const ProcessIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h5>
          A successful website build depends on a trustworthy and reliable web
          developer who is able to listen and understand what you need. My
          ability to clearly outline the pros and cons of the many options means
          that you can be confident you are making a good decision from the
          get-go.
        </h5>
        <h5>
          I’m not only passionate about website development, but I also
          understand what it means to run a business and the challenges that go
          with it. Here I detail my approach to developing and maintaining
          websites:
        </h5>
        <h4>1. Finding out what you want</h4>
        <p>
          I strongly believe in content and structure before design. The most
          important part of a website is your content, because that’s what your
          clients and customers are engaging with. Content is at the heart of
          how your visitors perceive your business and is also fundamental to
          how search engines rank you.
        </p>
        <p>
          I use GatherContent – a content production programmer - to help
          structure and collate all your content. Once we have the initial
          content structure, I will use rapid prototyping to establish the site
          structure and flow to maximize its potential in terms of usability and
          conversion.
        </p>
        <ul>
          <li>- Sitemap</li>
          <li>- User Stories</li>
          <li>- Wireframes</li>
          <li>- Specifications</li>
          <li>- Prototype</li>
        </ul>
        <p>
          Once we have agreed on a direction, we can finalize the paperwork and
          kick off the project.
        </p>
        <h4>2. Starting with content and structure</h4>
        <p>
          I strongly believe in content and structure before design. The most
          important part of a website is your content, because that’s what your
          clients and customers are engaging with. Content is at the heart of
          how your visitors perceive your business and is also fundamental to
          how search engines rank you.
        </p>
        <p>
          I use GatherContent – a content production programme - to help
          structure and collate all your content. Once we have the initial
          content structure, I will use rapid prototyping to establish the site
          structure and flow to maximise its potential in terms of usability and
          conversion.
        </p>
        <h4>3. Creating the design</h4>
        <p>
          After working out the requirements you can have a design produced
          based on the functionality you need. A design will ensure your product
          or site appeals to the right audience. It provides clarity, ease of
          use and leads to a higher conversion rate and a return on your
          investment.
        </p>
        <p>
          Multiple design concepts are a great way of giving you options and
          steering the designs in the right direction. At the end of this phase,
          you will have one or more of the following:
        </p>
        <ul>
          <li>- Full designs provided as PSDs</li>
          <li>- Logo in multiple formats</li>
          <li>- Styleguide</li>
        </ul>
        <h4>4. Building your site</h4>
        <p>
          The build phase is straight forward. We will use everything compiled
          so far such as designs, wireframes and requirements to now jump
          straight into creating your product or website.
        </p>
        <p>
          I work using Agile and SCRUM. This means that all tasks are
          prioritised from most to least important. I manage the tasks using
          MeisterTask for smaller sites and JIRA for larger sites. Some clients
          prefer to use Basecamp. The backlog is visible to you and gives you
          the opportunity to prioritise tasks you want me to work on first –
          usually those with the highest value.
        </p>
        <p>
          I work through a select list of items from the backlog on a weekly or
          fortnightly basis (known as a sprint) after which I will run a demo.
          I’ll share progress updates with you and give you the chance to change
          tasks as we develop. Demos with progress reports will give you
          confidence that your project is on track and within budget.
        </p>
        <h4>5. Ensuring quality</h4>
        <p>
          Each task will be tested for quality assurance (QA) at the end of each
          sprint. Another round of QA testing will be performed at the end of
          your project. A final QA exit report will give you reassurance that
          your site works in all browser and device combinations agreed. Any
          issues will be fixed as they are uncovered.
        </p>
        <h4>6. Going live</h4>
        <p>
          Once you’ve done your final user acceptance testing and are confident
          your requirements have been met, I will setup your production hosting
          environment. Finally, I’ll deploy your site live.
        </p>
        <h4>7. Post go live maintenance and improvements</h4>
        <p>
          Up to 4 weeks after going live you’ll receive bug fixes free of
          charge.
        </p>
        <p>
          Any additional changes can be discussed and estimated on a per-case
          basis and fixed on an hourly rate.
        </p>
        <h4>8. Maintaining your website</h4>
        <p>
          You may want me to take care of the maintenance of your website. Here
          are some of the tools and methodologies I use:
        </p>
        <ul>
          <li>1. Signed up to receive Drupal Security updates</li>
          <li>
            2. Bespoke processes to track and assess Drupal and Wordpress
            websites I maintain
          </li>
          <li>
            3. Semi-automated updating, testing and deployment of core and
            contributed modules
          </li>
          <li>
            4. Personal assessment of your site with a status report sent to
            your inbox
          </li>
          <li>
            5. Every site I maintain is checked every minute and I’m alerted of
            any issues and will inform you immediately.
          </li>
        </ul>
        <p>
          provide two distinct monthly subscription packages you can sign up to.
          They are on a rolling contract and provide you with the basic level of
          updates and support from me. Any additional work is covered on a
          per-case basis and charged at an agreed and discounted hourly rate.
        </p>
        <p>
          Learn more about the{" "}
          <Link to="/service-types/website-update/">
            Website maintenance package
          </Link>{" "}
          or{" "}
          <Link to="/service-types/content-management/">
            Content Management & E - Commerce
          </Link>
          .
        </p>
        <h4>Trusted tools & services I happily rely on:</h4>
        <p>
          Once you’ve done your final user acceptance testing and are confident
          your requirements have been met, I will setup your production hosting
          environment. Finally, I’ll deploy your site live.
        </p>
        <ul>
          <li>- Slack, Skype for day to day communication</li>
          <li>
            - Atlassian JIRA or MeisterTask for managing and prioritising the
            tasks
          </li>
          <li>- Axure Pro for sitemaps and prototyping</li>
          <li>- Atlassian Confluence or Google Docs for documentation</li>
          <li>- Visual Studio Code, Git and Chrome for development</li>
          <li>- Amazon AWS, Hetzner or Platform.sh for hosting</li>
        </ul>
      </div>
    </div>
  )
}

export default ProcessIntro
