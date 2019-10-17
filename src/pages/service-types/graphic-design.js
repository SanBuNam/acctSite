import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./graphic-design.module.scss"

export default () => (
  <Layout>
    <SEO title="graphic-design" />
    <div className={styles.container}>
      <div className={styles.leftGrid}>
        <section className={styles.title}>
          <h2>Graphic design & logos</h2>
          <h5>Print design</h5>
          <p>
            Web Developers Studio can fulfill any graphic communication needs
            you might have. We pride ourselves on our ability to customize all
            designs for all mediums, from web to print to wearable merchandise.
            Check out our sample suite of common print formats from our own
            branding materials that we can fit to your brand identity and
            incorporate into your marketing campaign.
          </p>
        </section>
        <div className={styles.inner}>
          <div className={styles.ul}>
            <ul>
              <li>
                <a>Business Card</a>
              </li>
              <li>
                <a>Stylized Maps</a>
              </li>
              <li>
                <a>Tri-fold Brochure</a>
              </li>
              <li>
                <a>Resume</a>
              </li>
              <li>
                <a>Postcard</a>
              </li>
            </ul>
          </div>
          <div className={styles.second}>2cond</div>
          <div className={styles.bot}>Logo Work</div>
        </div>
      </div>

      <div className={styles.rightGrid}>
        <h5>Testimonials</h5>
        <div className={styles.frame}>frame</div>
        <h5>Recent Articles</h5>
        <a>12 Tips for Choosing a Great Template</a>
        <p>We at Web Developers Studio love designing custom websites…</p>
        <br />
        <a>An Internet Morality Tale</a>
        <p>Around 2005 (long, long ago in internet years) a prospective…</p>
        <br />
        <a>Wordpress vs Business Catalyst vs Squarespace</a>
        <p>Need to update your website more than…</p>
        <br />
        <a>Google’s 3 ‘A’s – Adwords, Adsense, and Analytics</a>
        <p>We at Web Developers Studio love designing custom websites…</p>
        <br />
        <a>Dinosaours and David and The Client</a>
      </div>
    </div>
  </Layout>
)
