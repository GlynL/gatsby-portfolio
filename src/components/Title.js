import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  padding: 1rem 3rem;
  border-bottom: 1px solid #333;
`

export default ({ children }) => <Title>{children}</Title>
