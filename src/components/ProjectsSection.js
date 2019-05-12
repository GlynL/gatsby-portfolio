import React from "react"

import Section from "./Section"
import Heading from "./Heading"
import Title from "./Title"
import ProjectsList from "./ProjectsList"

const ProjectsSection = () => (
  <Section dark id="projects">
    <Heading>
      <Title>Projects</Title>
    </Heading>
    <ProjectsList />
  </Section>
)

export default ProjectsSection
