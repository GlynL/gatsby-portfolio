import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import LinkList from "./LinkList"

const Section = styled.section`
  height: 100vh;
`
const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Header = styled.header`
  text-align: center;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "background-orig.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <IntroSection data={data} />}
  />
)

const IntroSection = ({ data }) => (
  <Section id="intro">
    <Centered>
      {
        // using gatsby-image for background image
        // https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-370933169
      }
      <Img
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        fluid={data.backgroundImage.childImageSharp.fluid}
      />
      <Header>
        <h1>Glyn Lewington</h1>
        <p>Web Developer</p>
      </Header>
      <LinkList />
    </Centered>
  </Section>
)
