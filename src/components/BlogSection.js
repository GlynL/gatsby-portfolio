import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Slider from "react-slick"
import articles from "../assets/articles.js"
import { addImageToItems } from "../helpers/helpers.js"

import Section from "./Section"
import Heading from "./Heading"
import Title from "./Title"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
// slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "100px",
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "articles" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 420) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogSection data={data} />}
  />
)

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`

const BlogSection = ({ data }) => {
  // image added to data under image
  const articlesWithImages = addImageToItems(data, articles, "fluid")
  const slides = articlesWithImages.map(article => (
    <a
      href={article.link}
      rel="noopener noreferrer"
      target="_blank"
      key={article.title}
    >
      <Img
        fluid={article.image.node.childImageSharp.fluid}
        style={{ maxWidth: "420px", margin: "auto" }}
      />
    </a>
  ))
  return (
    <Section id="blog">
      <Heading>
        <Title>Blog</Title>
      </Heading>
      <Wrapper>
        <Slider {...settings}>{slides}</Slider>
      </Wrapper>
    </Section>
  )
}
