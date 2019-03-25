import React from "react"
import SEO from "../components/seo"
import { Helmet } from "react-helmet" /* doubled in seo */

import "../styles/normalize.css"
import "../styles/styles.css"

import Header from "../components/header"
import IntroSection from "../components/IntroSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import BlogSection from "../components/BlogSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <SEO
      title="Glyn Lewington Portfolio"
      keywords={[`glyn lewington`, `portfolio`, `web developer`]}
    />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Merriweather:400,700"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <IntroSection />
    <SkillsSection />
    <ProjectsSection />
    <BlogSection />
    <ContactSection />
    <Footer />
  </div>
)

export default IndexPage
