import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import AboutMeIntroduction from "../components/about-page/about-me-introduction"
import MyStory from "../components/about-page/my-story"
import DesignDevelopment from "../components/landing-page/design-and-development"

export default () => (
  <Layout>
    <SEO title="about website design" />
    <AboutMeIntroduction />
    <MyStory />
    <DesignDevelopment />
  </Layout>
)
