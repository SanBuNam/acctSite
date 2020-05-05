import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import TermsHeader from "../components/terms-condition-page/terms-header"
import TermsConditions from "../components/terms-condition-page/terms-and-condition"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="Website Terms" />
    <TermsHeader />
    <TermsConditions />
    <Questions />
  </Layout>
)
