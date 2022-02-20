import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import PrivacyHeader from "../components/privacy-notice-page/privacy-header"
import PrivacyPolicy from "../components/privacy-notice-page/privacy-policy"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="Online Marketing OC, CA" />
    <PrivacyHeader />
    <PrivacyPolicy />
    <Questions />
  </Layout>
)
