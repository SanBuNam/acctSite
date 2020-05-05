import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./website-hosting.module.scss"

export default () => (
  <Layout>
    <SEO title="website-hosting" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Web hosting</h2>
        <h5>What is web hosting?</h5>
        <p>
          Once the site is developed, it needs to be hosted: made available
          online so the public can view it.
        </p>
        <p>
          Websites live on hard drives, or “servers,” that are connected to the
          Internet. Hosting a website means giving it space on a server. Servers
          are finicky and expensive to maintain, and websites are only as
          reliable as the maintenance of the servers they live on.
        </p>
        <p>
          We provide hosting on servers that we control. When you host with us,
          we guarantee our our continued support and availability for updates
          and maintenance. However, the websites we develop can be hosted
          elsewhere, and you are not obligated to host with us.
        </p>
        <h5>Our hosting services</h5>
        <ul>
          <li>
            A daily visual check — we look at (at least) one of your pages every
            single day to make sure all is well
          </li>
          <li>
            All sites go down (including the FBI and Microsoft). If you’re on
            our servers, we hustle right away to get it back up
          </li>
          <li>
            Monitor your domain name to ensure that registration is kept
            up-to-date
          </li>
          <li>Timely email/phone responses to your concerns</li>
          <li>Software (such as WordPress and plugins) upgrades as required</li>
          <li>Assistance with your email accounts</li>
          <li>
            We often don’t pull out the time sheet for our hosted clients’ quick
            calls and questions
          </li>
        </ul>
        <h5>Why should you host with us?</h5>
        <p>
          Years ago, one of our current clients first called us in a panic about
          his then-website. “My friend just said my website has been down for
          three weeks,” he said. “Why didn’t he tell me before? I lost so much
          business. I tried to contact my web guy, but he’s not answering his
          phone – what do I do?” We at Web Developers Studio made his problem
          our own, quickly got his website live, and maintained it as a reliable
          and attractive web presence that he is proud of, without a day of
          downtime ever since.
        </p>
        <p>
          Web Developers Studio has been in business since 2005. We don’t “have
          another job.” We answer our phones. We’re not so big that you’ll get
          lost in the shuffle, but not so small that we’ll just disappear.
        </p>
        <p>
          Although we only offer the most reliable hosting, it is always a
          possibility that websites will go down. With that in mind we check
          your website daily to make sure it’s up and working as it should.
          That’s a human being visually checking at least your homepage every
          single day – in addition to the usual monitoring tools that many web
          developers employ. For as long as you host with us, your website is
          part of our daily routine and we will promptly pick up the phone when
          you call with any question or issue.
        </p>
      </div>
    </div>
  </Layout>
)
