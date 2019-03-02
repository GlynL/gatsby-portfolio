import React from "react"
import styled from "styled-components"
import icons from "../assets/icons"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 100px));
  justify-content: center;
`

const Icon = styled.div``

const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>Skills</h1>
      <Grid>
        <Icon>{icons.html}</Icon>
        <Icon> {icons.css}</Icon>
        <Icon> {icons.javascript}</Icon>
        <Icon>{icons.react}</Icon>
        <Icon>{icons.redux}</Icon>
        <Icon>{icons.node}</Icon>
        <Icon>{icons.mongodb}</Icon>
      </Grid>
    </section>
  )
})

export default SkillsSection
