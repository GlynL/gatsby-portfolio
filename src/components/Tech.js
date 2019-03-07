import React from "react"
import styled from "styled-components"

const Tech = styled.li`
  background: #fcfcfc;
  border: 1px solid #646464;
  border-radius: 5px;
  padding: 5px 10px;
  color: #646464;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  display: inline-block;
  list-style: none;
  margin: 0 5px;

  :hover,
  :active,
  :focus {
    background: #646464;
    color: #fcfcfc;
  }
`
export default ({ children }) => <Tech>{children}</Tech>
