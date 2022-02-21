import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import BackgroundTitle from "../components/background-image/background-title"
import IntroductionText from "../components/landing-page/introductionText"

import ApproachProcess from "../components/landing-page/approach-process"

import Questions from "../components/common/questions"
import DesignDevelopment from "../components/landing-page/design-and-development"
import Referrals from "../components/landing-page/referrals"

export default () => (
  <Layout>
    <SEO title="Richard Lee CPA Accountancy" />
    <BackgroundTitle />
    <IntroductionText />

    <ApproachProcess />

    <Questions />
    <DesignDevelopment />
    <Referrals />
  </Layout>
)
