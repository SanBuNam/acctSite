import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./social-media-marketing.module.scss"
import Social from "../../../content/images/Social-Media1.jpg"
import Social2 from "../../../content/images/Social-Media2.jpg"

export default () => (
  <Layout>
    <SEO title="social-media-marketing" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Social media & marketing</h2>
        <img alt="Social" src={Social} />
        <p>
          Many business and professional people are confused about social media.
          Afraid to go overboard, they don't bother at all.
        </p>
        <p>
          Typically a median course is most effective. You want to stay
          connected to clients and prospective clients, remind them you’re
          around, show off expertise in your field and let them warm up to your
          way of thinking.
        </p>
        <p>
          A few Twitter posts each week is better than nothing. Add an
          attractive and well-cultivated Facebook page, robust LinkedIn
          participation, an occasional blog and professional newsletter and
          you're golden.
        </p>
        <h5>But what if you don't have time? (Or just hate it.)</h5>
        <p>
          Web Developers Studio offers a “ghost social” service. We can set up
          the social media accounts for you, and in a tone appropriate to your
          message and goals, we post for you.
        </p>
        <p>
          If you need a high level of control, we can pre-submit entries to you,
          and upon approval, schedule them for posting. Alternatively you can
          grant us more flexibility, so we can post regularly and bother you
          very little. Either way, outsourcing the routine of it takes one thing
          off your list.
        </p>
        <h5>Reputation Control</h5>
        <p>
          Classic case study: a youthfully indiscreet letter is posted on a site
          that revels in such things. Now what? If your career is suffering from
          a awkward post or unfortunate professional news item that won't go
          away, we can assist in the unholy science of reputation control. Let
          us devise a plan to minimize the damage.{" "}
          <Link to="/contact/">Contact us</Link>.
        </p>
        <h5>For Social Media Skeptics</h5>
        <p>
          Many wonderfully competent business and professional clients are
          skeptics about social media. Some have justified concerns about the
          perils of social media gone awry – for example, our reputation control
          scenario.
        </p>
        <p>
          Ok, but you must know: Not having a LinkedIn account now is like not
          having a business card ten years ago. You could have gotten away with
          it, made excuses, written your name on a napkin for a prospective
          client. But you didn't; you had the business cards printed. Why
          handicap yourself now?
        </p>
        <div className={styles.right}>
          <img alt="Social2" src={Social2} />
          <p>
            Have you noticed that you receive fewer phone calls than before?
            That’s because a phone call is too intrusive for our casual society;
            it requests attention right now. An email is less demanding, but
            it's still an interruption to the receiver and implies a response is
            desired. For some ideas you may want to put out there, it's still
            too much.
          </p>
          <p>
            That's why Twitter is so popular. A "tweet" is not even a tap on the
            shoulder. Whoever sees the post, fine. If they miss it, fine. They
            might see it later. They might favorite or retweet it. But most
            won’t. Actually, you’ll get a 100 lurkers for every bit of feedback.
            The world moves on.
          </p>
          <p>
            Finally, are your competitors already there? If so, time to get on
            your game! Even if you really hate it, don’t miss out on the
            benefits of a well run social media campaign. Have us do it for you.
          </p>
        </div>
        <h5>Put your ad out there</h5>
        <p>
          Web Developers Studio holds a Google Adwords MMC account and is a
          graduate of the Google Engage program. If you need to get attention to
          your site fast and regularly, AdWords is a great mechanism. You only
          pay when someone clicks your ad, and you can limit the amount you
          spend at any time.
        </p>
        <p>
          Over the first 90 days we work closely with Google to optimize your
          new AdWords account. Your pay-per-click campaign can be tracked and
          analyzed carefully. You can run it, or we can do it for you. Our goal
          is build an advertising campaign that you can easily run after our
          optimization.
        </p>
      </div>
    </div>
  </Layout>
)
