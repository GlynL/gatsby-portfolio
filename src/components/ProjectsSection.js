import React from "react"
// import styled from "styled-components"

import Heading from "./Heading"
import Title from "./Title"
import ProjectsList from "./ProjectsList"

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Heading>
        <Title>Projects</Title>
      </Heading>
      <ProjectsList />
    </section>
  )
})
export default ProjectsSection
