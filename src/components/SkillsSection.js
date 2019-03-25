import React from "react"
import styled from "styled-components"
import icons from "../assets/icons"

import Section from "./Section"
import Heading from "./Heading"
import Title from "./Title"

const Row = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  min-height: 100px;
  min-width: 100px;
  max-height: 150px;
  max-width: 150px;
  margin: 10px;
`

const SkillsSection = () => (
  <Section id="skills">
    <Heading>
      <Title>Skills</Title>
    </Heading>
    <div>
      <Row>
        <Icon>{icons.html}</Icon>
        <Icon> {icons.css}</Icon>
        <Icon> {icons.javascript}</Icon>
      </Row>
      <Row>
        <Icon>{icons.react}</Icon>
        <Icon>{icons.redux}</Icon>
      </Row>
      <Row>
        <Icon>{icons.node}</Icon>
        <Icon>{icons.mongodb}</Icon>
      </Row>
    </div>
  </Section>
)

export default SkillsSection
