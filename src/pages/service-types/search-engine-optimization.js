import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./search-engine-optimization.module.scss"

export default () => (
  <Layout>
    <SEO title="search-engine-optimization" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <h2>Search engine optimization</h2>
          <p>
            At Web Developers Studio, we do all of the above and more. We’ll
            start with you at square one, help you pick out and purchase a
            domain, often at a discount, and stay with you throughout the
            creation, promotion, and care and keeping of your website.
          </p>
          <p>
            Great{" "}
            <span style={{ fontWeight: "600", color: "#263248" }}>
              SEO (search engine optimization)
            </span>{" "}
            starts at the beginning. You’re the subject matter expert, but you
            might not know the words that your potential clients and customers
            are typing into the search engines.
          </p>
          <p>
            For example, we worked with our client,{" "}
            <span>gynecologist Dr. Cindy Parnes</span>, to determine which parts
            of her practice to emphasize. Together we hunted through her
            services and attributes to find the best keywords. After a series of
            tests, we found a few with search results through the roof. That
            boost sent her website much higher in Google’s results than most
            private doctors. Our careful, attentive, and personalized SEO
            development found just the right leverage. The little techniques add
            up – Dr. Parnes happily reports that her website continues to draw
            in new patients.
          </p>
          <p>
            Another of our clients,{" "}
            <span>Elizabeth Lindberg, a Swedish massage therapist</span>, paid
            thousands of dollars to an “SEO specialist” who “wrote articles” for
            her and promised top rankings. But they never got her website to the
            first pages of Google results for her keywords within her own
            hometown. Then she came to us. Web Developers Studio took her domain
            and worked with her closely. After a few weeks of being live with
            us, she showed up in Google searches for her keywords with her town,
            then with her county, and now she is the top return for her keywords
            in her state.
          </p>
          <p>
            Along the top and right side of search engines’ results pages are
            paid ads (incidentally, <span>another of our services</span>) but
            most users know the results beneath the paid ads are the organically
            generated results that show up based on the merit of their own
            content and coding. The site owners do not pay the search engines
            for the exposure.
          </p>
          <p>
            In addition to brainstorming alongside you, our team uses the most
            competitive SEO coding techniques on every page of your website. We
            avoid old-fashioned formats, like tables, which are still common but
            hard for search engines to parse. With the exception of our least
            expensive <span>package</span>, our websites are hand-coded to
            produce these excellent results. We combine your intimate knowledge
            of your business with our web expertise to optimize your website for
            the most possible “foot-traffic.”
          </p>
          <p>
            Let's start with a <span>comprehensive review</span> together.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
