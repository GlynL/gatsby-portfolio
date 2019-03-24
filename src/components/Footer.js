import React from "react"
import styled from "styled-components"
import LinkList from "./LinkList"

const Section = styled.section`
  background: #fdfdfd;
`
const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`

export default () => (
  <Section>
    <Footer>
      <LinkList />
    </Footer>
  </Section>
)
