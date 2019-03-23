import React from "react"
import projects from "../assets/projects"
import Project from "./Project"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { addImageToItems } from "../helpers/helpers.js"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "projects" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectsList data={data} />}
  />
)

const ProjectsList = ({ data }) => {
  // match project imagePath with graphql image src
  const projectsWithImage = addImageToItems(data, projects)

  const projectsList = projectsWithImage.map(project => (
    <Project project={project} />
  ))
  return <Container>{projectsList}</Container>
}
