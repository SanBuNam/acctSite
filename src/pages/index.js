import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import Introduction from "../components/landing-page/introduction"
import HorizontalLayout from "../components/layouts/horizontal-layout"
import ThreeLayout from "../components/layouts/three-layout"
import WorkExperience from "../components/landing-page/freelance-web-developer"
import Testimonial from "../components/landing-page/article-list"
import WhyMe from "../components/landing-page/why-hire-me"
import DevelopmentApproach from "../components/landing-page/web-development-approach"
import MakeCarousel from "../components/makeCarousel"
import Statement from "../components/landing-page/statement"
import Background from "../components/layouts/background-image-layout"
import StatementTwo from "../components/landing-page/statementTwo"
import RecentWork from "../components/landing-page/recent-work"
import DevelopmentExplained from "../components/landing-page/web-development-explained"
import Composition from "../components/composition"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Introduction
      title="I am David,"
      subtitle="Freelance web developer in California with over 15 years of experience."
    />
    <WorkExperience />
    <MakeCarousel />
    <Testimonial />
    <WhyMe />
    <DevelopmentApproach />
    <HorizontalLayout />
    <ThreeLayout />
    <Statement />
    <RecentWork />
    <StatementTwo />
    <Background />
  </Layout>
)
