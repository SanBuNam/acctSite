import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import ServiceIntroduction from "../components/services-page/service-introduction"
import ServiceTypes from "../components/services-page/service-type"
import ExistingWebsites from "../components/services-page/existing-website"
import QandAsection from "../components/services-page/questions-and-answers"
import ServiceStatement from "../components/services-page/serivce-statement"

export default () => (
  <Layout>
    <SEO title="web service" />
    <ServiceIntroduction />
    <ServiceTypes />
    <ExistingWebsites />
    <QandAsection />
    <ServiceStatement />
  </Layout>
)
