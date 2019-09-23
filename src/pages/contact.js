import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import ContactMe from "../components/contact-page/contact-me"
import MyStory from "../components/about-page/my-story"

export default () => (
  <Layout>
    <SEO title="contact" />
    <ContactMe />
    <MyStory />
  </Layout>
)
