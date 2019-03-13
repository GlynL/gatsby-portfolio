import React from "react"
import styled from "styled-components"
import icons from "../assets/icons"

const Wrapper = styled.section`
  height: 100vh;
`
const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const List = styled.ul`
  display: flex;
  align-items: baseline;
  list-style: none;
  padding: 0;
`
const Item = styled.li`
  height: 30px;
  width: 30px;
  margin: 0 5px;
`
const Link = styled.a`
  color: inherit;
`

const Header = styled.header`
  text-align: center;
`

const IntroSection = () => (
  <Wrapper id="intro">
    <Centered>
      <Header>
        <h1>Glyn Lewington</h1>
        <p>Web Developer</p>
      </Header>
      <List>
        <Item>
          <Link
            href="https://github.com/glynl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.github}
          </Link>
        </Item>
        <Item>
          <Link
            href="https://twitter.com/GlynWebDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.twitter}
          </Link>
        </Item>
        <Item>
          <Link
            href="https://www.linkedin.com/in/glynlewington/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.linkedin}
          </Link>
        </Item>
        <Item>
          <Link
            href="https://medium.com/@glynlewington"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.medium}
          </Link>
        </Item>
      </List>
    </Centered>
  </Wrapper>
)

export default IntroSection
