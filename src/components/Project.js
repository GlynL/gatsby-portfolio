import React from "react"
import styled from "styled-components"
import Tech from "./Tech"
import Button from "./Button"

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

export default ({ project }) => {
  const techs = project.technologies.map(tech => <Tech key={tech}>{tech}</Tech>)
  return (
    <div>
      <p>{project.img}</p>
      <ul>{techs}</ul>
      <p>{project.description}</p>
      <Button>
        <Anchor href={project.site} target="_blank">
          Live Site
        </Anchor>
      </Button>
      <Button>
        <Anchor href={project.github} target="_blank">
          Github
        </Anchor>
      </Button>
    </div>
  )
}
