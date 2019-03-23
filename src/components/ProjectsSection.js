import React from "react"
import styled from "styled-components"

import Heading from "./Heading"
import Title from "./Title"
import ProjectsList from "./ProjectsList"

const Section = styled.section`
  background: #f2f2f2;
`

const ProjectsSection = () => (
  <Section id="projects">
    <Heading>
      <Title>Projects</Title>
    </Heading>
    <ProjectsList />
  </Section>
)

export default ProjectsSection
