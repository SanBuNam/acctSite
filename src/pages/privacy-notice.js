import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import PrivacyHeader from "../components/privacy-notice-page/privacy-header"
import TermsConditions from "../components/terms-condition-page/terms-and-condition"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="terms-and-conditions" />
    <PrivacyHeader />
    <TermsConditions />
    <Questions />
  </Layout>
)
