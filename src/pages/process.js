import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import MyApproach from "../components/process-page/my-process"
import ProcessIntro from "../components/process-page/process-intro"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="web service" />
    <MyApproach />
    <ProcessIntro />
    <Questions />
  </Layout>
)
