import React from "react"
import styled from "styled-components"

const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`
export default ({ children }) => <Heading>{children}</Heading>
