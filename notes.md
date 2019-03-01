* Refs & Smooth Scrolling

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.skillsSection = React.createRef()

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection = e => {
    switch (e.target.textContent) {
      case "Skills": {
        debugger
        this.skillsSection.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        break
      }
    }
  }

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Header scrollToSection={this.scrollToSection} />
        <div style={{ height: "1500px" }} />
        <section ref={this.skillsSection}>Skills</section>
      </>
    )
  }
}

export default IndexPage