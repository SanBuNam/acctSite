import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import TitleName from "../components/landing-page/title-name"
import WorkHistory from "../components/landing-page/work-history"
import ProjectSlider from "../components/layouts/reference-projects"
import WhyHireMe from "../components/landing-page/why-hire-me"
import MyApproach from "../components/landing-page/my-approach"
import ApproachProcess from "../components/landing-page/approach-process"
import Questions from "../components/common/questions"
import Statement from "../components/landing-page/statement"
import DesignDevelopment from "../components/landing-page/design-and-development"
import Referrals from "../components/landing-page/referrals"
import WorkWithMe from "../components/landing-page/work-with-me"

export default () => (
  <Layout>
    <SEO title="freelancer-web-developer-in-orange-county" />
    <TitleName />
    <WorkHistory />
    <WhyHireMe />
    <MyApproach />
    <ApproachProcess />
    <Questions />
    <ProjectSlider />
    <Statement />
    <DesignDevelopment />
    <Referrals />
    <WorkWithMe />
  </Layout>
)
