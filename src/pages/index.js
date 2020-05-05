import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import TitleName from "../components/landing-page/title-name"
import WorkHistory from "../components/landing-page/work-history"
import WhyHireMe from "../components/landing-page/why-hire-me"
import MyApproach from "../components/landing-page/my-approach"
import ApproachProcess from "../components/landing-page/approach-process"
import Questions from "../components/common/questions"
import DesignDevelopment from "../components/landing-page/design-and-development"
import Referrals from "../components/landing-page/referrals"

export default () => (
  <Layout>
    <SEO title="Freelancer Web Developer" />
    <TitleName />
    <WorkHistory />
    <DesignDevelopment />
    <WhyHireMe />
    <MyApproach />
    <ApproachProcess />
    <Questions />
    <Referrals />
  </Layout>
)
