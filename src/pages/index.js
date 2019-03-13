import React from "react"
import SEO from "../components/seo"

import "../styles/styles.css"

import Header from "../components/header"
import IntroSection from "../components/IntroSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <IntroSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
)

export default IndexPage
