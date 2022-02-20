import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import ContactMe from "../components/contact-page/contact-me"
import ContactForm from "../components/contact-page/contact-form"
import DesignDevelopment from "../components/landing-page/design-and-development"

export default () => (
  <Layout>
    <SEO title="Contact Web Designer" />
    <ContactMe />
    <ContactForm />
    <DesignDevelopment />
  </Layout>
)
