import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import AboutMeIntroduction from "../components/about-page/about-me-introduction"
import MyStory from "../components/about-page/my-story"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="about website design" />
    <AboutMeIntroduction />
    <MyStory />
    <Questions />
  </Layout>
)
