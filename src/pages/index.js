import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import Title from "../components/landing-page/title"
import WorkExperience from "../components/landing-page/freelance-web-developer"
import Testimonial from "../components/landing-page/article-list"
import WhyMe from "../components/landing-page/why-hire-me"
import MyApproach from "../components/landing-page/my-approach"
import MyApproachBox from "../components/landing-page/my-approach-box"
import MakeCarousel from "../components/makeCarousel"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Title
      title="I am David,"
      subtitle="Freelance web developer in
      California with over 15 years of experience."
    />
    <WorkExperience
      title="Looking to hire a Orange County, CA"
      subtitle="Freelance Web Developer?"
    >
      <p>
        I create websites and applications, built to convert, improve business
        processes and maximize ROI here in Orange County, CA. <br />
      </p>
      <p>
        Over the last 15 years I’ve worked with Orange County-based companies
        such as{" "}
        <span>
          CJ Foods, Paris Baguettes, NMSI National Mortgage Group, Unico
          Logistics, Aldex America (POSCO){" "}
        </span>
        and many more small to large businesses.
      </p>
    </WorkExperience>
    <MakeCarousel />
    <Testimonial />
    <WhyMe />
    <MyApproach />
    <MyApproachBox />
  </Layout>
)
