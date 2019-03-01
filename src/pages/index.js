import React from "react"
import SEO from "../components/seo"

import Header from "../components/header"
import SkillsSection from "../components/SkillsSection"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.first = React.createRef()
    this.skillsSection = React.createRef()

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection = e => {
    switch (e.target.textContent) {
      case "Skills":
        this.skillsSection.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        return
      case "First":
        this.first.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    }
  }

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header scrollToSection={this.scrollToSection} />
        <div style={{ height: "1500px" }} />
        <section ref={this.first}>First</section>
        <SkillsSection ref={this.skillsSection} style={{ height: "1500px" }}>
          Skills
        </SkillsSection>
      </>
    )
  }
}

export default IndexPage
