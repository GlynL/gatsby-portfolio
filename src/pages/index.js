import React from "react"
import SEO from "../components/seo"

import Header from "../components/header"
import IntroSection from "../components/IntroSection"
import SkillsSection from "../components/SkillsSection"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.home = React.createRef()
    this.first = React.createRef()
    this.skills = React.createRef()

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection = e => {
    const target = e.target.id
    this[target].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  render() {
    return (
      <div ref={this.home}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header scrollToSection={this.scrollToSection} />
        <IntroSection />
        <SkillsSection ref={this.skills} />
      </div>
    )
  }
}

export default IndexPage
