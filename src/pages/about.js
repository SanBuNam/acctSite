import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import AboutMe from "../components/about-page/about-me"
import MyStory from "../components/about-page/my-story"

export default () => (
  <Layout>
    <SEO title="about" />
    <AboutMe />
    <MyStory />
  </Layout>
)
