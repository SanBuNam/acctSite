import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import TitleName from "../components/landing-page/title-name"
import WorkHistory from "../components/landing-page/work-history"
import ProjectSlider from "../components/layouts/reference-projects"
import Testimonials from "../components/landing-page/testimonials"
import WhyHireMe from "../components/landing-page/why-hire-me"
import MyApproach from "../components/landing-page/my-approach"
import ApproachProcess from "../components/landing-page/approach-process"
import Questions from "../components/landing-page/questions"
import Statement from "../components/landing-page/statement"
import RecentWork from "../components/landing-page/recent-work"
import Referrals from "../components/landing-page/referrals"
import WorkWithMe from "../components/landing-page/work-with-me"
import ContactInformation from "../components/landing-page/contact-information"

export default () => (
  <Layout>
    <SEO title="Home" />
    <TitleName />
    <WorkHistory />
    <ProjectSlider />
    <Testimonials />
    <WhyHireMe />
    <MyApproach />
    <ApproachProcess />
    <Questions />
    <Statement />
    <RecentWork />
    <Referrals />
    <WorkWithMe />
    <ContactInformation />
  </Layout>
)
