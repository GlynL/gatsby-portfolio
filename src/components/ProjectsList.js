import React from "react"
import projects from "../assets/projects"
import Project from "./Project"

export default () => {
  const projectsList = projects.map(project => <Project project={project} />)
  return <div>{projectsList}</div>
}
