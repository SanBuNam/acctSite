import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import WebServices from "../components/services-page/web-services"

import ServiceTypes from "../components/services-page/service-type"
import Existing from "../components/services-page/existing-website"
import Answers from "../components/services-page/answers-to-questions"
import Statement from "../components/services-page/Statement"

export default () => (
  <Layout>
    <SEO title="web service" />
    <WebServices />

    <ServiceTypes />

    <Existing />
    <Answers />
    <Statement />
  </Layout>
)
