import React, { Fragment } from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./website-design.module.scss"

export default () => (
  <Layout>
    <SEO title="website-design" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>What makes a good website?</h2>
        <ul>
          <li>
            It{" "}
            <Link to="/service-types/content-management/">
              suits your technical requirements
            </Link>{" "}
            and visually supports your professional reputation. An ugly site is
            never advantageous; if a site is doing well while looking old or
            broken, the owner’s efforts would be better spent on more profitable
            activities rather than overcoming the site’s disreputable
            appearance.
          </li>
          <li>
            It’s{" "}
            <Link to="/service-types/website-hosting/">reliably available</Link>{" "}
            online and{" "}
            <Link to="/service-types/website-update/">well tended</Link>.
          </li>
          <li>
            It’s{" "}
            <Link to="/service-types/social-media-marketing/">publicized</Link>{" "}
            and{" "}
            <Link to="/service-types/search-engine-optimization/">
              easy to find
            </Link>
            .
          </li>
        </ul>
        <p>
          At Web Developers Studio, we do all of the above and more. We’ll start
          with you at square one, help you pick out and purchase a domain, often
          at a discount, and stay with you throughout the creation, promotion,
          and care and keeping of your website.
        </p>
        <h5>Appropriate and Modern Design</h5>
        <p>
          Although some clients opt to have Web Developers Studio simply
          customize a pre-designed template, we’re always happiest to design
          something from scratch. While many designers limit the number of
          iterations they are willing to go through, Web Developers Studio never
          yet told a client “Sorry Pal, that’s it. Take it or leave it”. We just
          keep designing, designing, and designing until each client is
          delighted (so far).
        </p>
        <p>
          Naturally, our clients with design backgrounds have wanted lots of
          input, and we’re happy to work elbow to elbow tweaking this and
          nudging that. But even clients who have no particular design
          experience gave lots of terrific direction. We also produce great
          results if you just leave us in our cave till we emerge with
          something. (Often the first design we submit is approved on the spot!)
        </p>
        <h5>Great Content</h5>
        <p>
          You are the repository of a tremendous amount of deep-knowledge about
          your business, organization, or practice. At Web Developers Studio, we
          factor in the time need to help you formulate that into the great
          “content” that will draw the search engines to your site. Then they
          draw the clients you need to attract. Low cost providers do not
          typically calculate that into their estimates, but the investment is
          almost always worth it.
        </p>
        <h5>Compelling Images</h5>
        <p>
          Custom photography is of course ideal. We recommend these vendors.
          Second best is shots you took yourself. We can often photoshop them to
          be more than you think. Finally, if we have nothing else to decorate
          our pages, we recommend stock photos in a pinch.
        </p>
      </div>
    </div>
  </Layout>
)
