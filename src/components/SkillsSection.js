import React from "react"
import styled from "styled-components"
import icons from "../assets/icons"

import Heading from "./Heading"
import Title from "./Title"

const Row = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
`

const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
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
    </section>
  )
})

export default SkillsSection
