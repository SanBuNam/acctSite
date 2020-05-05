import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./website-review-critique.module.scss"
import websiteReview from "../../../content/images/websiteReview.png"

export default () => (
  <Layout>
    <SEO title="graphic-design" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h5>Website review & critique</h5>
        <img alt="random1" src={websiteReview} />
        <p>
          We don’t just design new websites. We can also examine your existing
          site and suggest improvements. Maybe it’s been a few years since your
          site was designed. Maybe it’s not bringing in as much business as you
          expected it to, or your clients are unwilling to use it. Or maybe it
          just doesn’t look quite right and you can’t put your finger on why.
        </p>
        <p>
          We started designing websites in 1999. With a deep knowledge about{" "}
          <span>Search Engine Optimization</span>, we can usually assess your
          site and present you with a professional evaluation.
        </p>
        <p>
          Web Developers Studio offers a two hour SWOT analysis, which includes
          an overview of your website’s current Strengths, Weaknesses,
          Opportunities and Threats. You might find this service particularly
          useful before beginning a new online initiative or rebranding process.
        </p>
        <h5>Competitor analysis</h5>
        <p>You can’t get to the top unless you know what you’re up against.</p>
        <p>
          There’s an old joke that ends with the punchline, “You don’t need to
          run faster than the bear, just faster than the guy you’re walking
          with!” It’s that way with your competitors online. If they’ve invested
          in a sophisticated web presence, you will fall behind without one.
        </p>
        <p>
          We’ll help you figure out what the current best sites in your field
          are doing right, and distinguish their SEO and UI tactics from their
          stylistic design and copywriting techniques.
        </p>
      </div>
    </div>
  </Layout>
)
