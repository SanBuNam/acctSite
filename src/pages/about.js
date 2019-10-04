import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import AboutMeIntroduction from "../components/about-page/about-me"
import MyStory from "../components/about-page/my-story"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="about" />
    <AboutMeIntroduction />
    <MyStory />
    <Questions />
  </Layout>
)
