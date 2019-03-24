import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import articles from "../assets/articles.js"
import { addImageToItems } from "../helpers/helpers.js"
import Heading from "./Heading"
import Title from "./Title"

import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
// slider settings
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "100px",
}

const Section = styled.section`
  background: #fdfdfd;
  padding: 50px;
  padding-top: 0px;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "articles" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 420, height: 300) {
                  ...GatsbyImageSharpFixed
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

const BlogSection = ({ data }) => {
  // image added to data under image
  const articlesWithImages = addImageToItems(data, articles)
  console.log(articlesWithImages)
  const slides = articlesWithImages.map(article => (
    <div>
      <Img fixed={article.image.node.childImageSharp.fixed} />
    </div>
  ))
  return (
    <Section id="blog">
      <Heading>
        <Title>Blog</Title>
      </Heading>
      <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
        <Slider {...settings}>{slides}</Slider>
      </div>
    </Section>
  )
}
