import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import ProcessIntroduction from "../components/process-page/process-introduction"
import ProcessExplained from "../components/process-page/process-explained"

export default () => (
  <Layout>
    <SEO title="web-development-process" />
    <ProcessIntroduction />
    <ProcessExplained />
  </Layout>
)
