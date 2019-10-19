import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layouts/site-layout"
import styles from "./content-management.module.scss"
import Ecommerce from "../../../content/images/Ecommerce.png"

export default () => (
  <Layout>
    <SEO title="graphic-design" />
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Content Management Systems & E-commerce</h2>
        <p>
          Content Management Systems let a non-technical person update a website
          without messing up the layout and design.
        </p>
        <p>
          One of the first questions we'll ask you during our free 20 minute
          consultation will be:{" "}
          <span>Do you need to update the site yourself?</span> The quick
          reaction is often "Yes, of course! " And of course we will be happy to
          install any of the many content management systems we know well. But
          this might not always be the correct answer for your situation.
        </p>
        <h5>You might not NEED content management…</h5>
        <p>
          Have you ever noticed generally well-designed websites with aspects
          that don't look quite right? Don't quite fit with the rest of the
          site? A developer can give her user the ability not just to update
          pages and create “Dear Diary” posts. You can also add images, change
          the fonts on your posts, even update your main image gallery if you
          like.
        </p>
        <img alt="random1" src={Ecommerce} />
        <p>
          But you’re busy, and your expertise lies outside of web design. It
          takes practice to recognize which details make a website work. What
          looks great the day the developer handed it over may lose its "it
          factor" as the months go on if too much is left available.
        </p>
        <p>
          Many libraries use Evanced and other calendar services. These
          typically offer upcoming events “widgets” that can easily be placed
          into a “static" websites. Twitter widgets and Google document snippets
          offer the same easy-to-implement “dynamic” functionality. Basically,
          we use the world's most secure data repositories to collect and store
          your information. Your website just displays it, saving time, money,
          and hassle.
        </p>
        <p>
          If you plan to update the site around quarterly or less, the right
          answer might be: "I'm a great business person, but learning this
          computer stuff isn't a good use of my time. Can you handle
          everything?" In that case Web Developers Studio might suggest a
          "static" website with occasional updates handled by us. This way, you
          can stick with what you know best, and your website will always and
          forever be beautiful.
        </p>
        <h5>But content management may be PERFECT for you…</h5>
        <p>
          If you'll need to update your website frequently with announcements,
          promotions, gallery items, etc, then getting a content management
          system is a good idea. Maybe you are pretty darn technical. And even
          if not we can "hide" any parts you don't want to access which makes
          the CMS easier to navigate. You can always <span>contact us</span>{" "}
          with <span>questions or concerns</span>. In any case, we can
          accommodate your needs: WordPress, Business Catalyst, Squarespace,
          Omeka, Joomla… If you are partial to a solution we're not already
          familiar with, we can learn your favorite in a jiffy.
        </p>
        <h5>Especially if you want a STORE</h5>
        <p>
          Do you need a marketplace to sell your products or services? There are
          countless e-commerce platforms, from simple Buy Now buttons to Yahoo
          Merchant to Shopify to osCommerce and Magento and more. We’ll help you
          figure out which is appropriate for your business. Then we'll teach
          you to use it and help you maintain it as your business and sales
          grow.
        </p>
      </div>
    </div>
  </Layout>
)
