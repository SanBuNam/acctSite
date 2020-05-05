import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./website-update.module.scss"

export default () => (
  <Layout>
    <SEO title="website-update" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Updates & maintenance</h2>
        <p>
          After your website is live, Web Developers Studio can continue to
          provide updates and maintenance on an hourly basis. We guarantee
          prompt availability for <span>hosted clients</span>, and have always
          done work for all previous clients on a reasonably timely basis.
        </p>
        <h5>To blog, or not to blog</h5>
        <p>
          If we set you up with a <span>content management system</span> you can
          update the site’s pages yourself. You can change your permanent
          content like your About page, or write “Dear Diary” blog posts. But
          all content management packages need periodic technical upgrades that
          we can perform for you in addition to any design tweaks you may want.
        </p>
        <h5>The static alternative</h5>
        <p>
          Many of our clients ask for blogs, but don’t realize the downsides.
          Writing a coherent, interesting blog post to well represent your
          company is a lot of work. It gets hard to remember the business
          benefits of regular posting when it’s another crumby chore.
        </p>
        <p>
          And an stale blog is an eyesore and a detriment. A content management
          system is often not needed. A static site can well represent your
          organization if updates are anticipated only around quarterly or less.
          We understand our own creations from the ground up, and many of
          clients feel safer leaving updates to us.
        </p>
        <p>
          For the website owner who wants to use updated content to stay in
          touch with clients, but can’t write a whole post at least every month,
          we recommend a simple Twitter feed on the static site. (140 characters
          every few days is often a good compromise. And if you’re just to busy
          to do that–or just can’t stand it–we recommend our{" "}
          <span>ghost social service</span>.)
        </p>
      </div>
    </div>
  </Layout>
)
