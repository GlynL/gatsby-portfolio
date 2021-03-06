import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Tech from "./Tech"
import Button from "./Button"

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

const Card = styled.div`
  width: 300px;
  margin: 0 20px;
  margin-bottom: 50px;
  padding: 10px;
  background: #fdfdfd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`

const Description = styled.div``

const TechList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const LinkButton = styled(Button)`
  margin: 5px;
`

export default ({ project }) => {
  const dangerousDescription = { __html: project.description };

  const techs = project.technologies.map(tech => <Tech key={tech}>{tech}</Tech>)
  return (
    <Card>
      <Img fixed={project.image.node.childImageSharp.fixed} />
      <Description>
        <TechList>{techs}</TechList>
        <div dangerouslySetInnerHTML={dangerousDescription}/>
        <Links>
          <LinkButton>
            <Anchor href={project.site} target="_blank">
              Live Site
            </Anchor>
          </LinkButton>
          <LinkButton>
            <Anchor href={project.github} target="_blank">
              Github
            </Anchor>
          </LinkButton>
          {project.githubApi && (
            <LinkButton>
              <Anchor href={project.githubApi} target="_blank">
                Github Api
              </Anchor>
            </LinkButton>
          )}
        </Links>
      </Description>
    </Card>
  )
}
