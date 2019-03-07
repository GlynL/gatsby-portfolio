import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: #646464;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: #fcfcfc;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;

    :hover, :active, :focus {
      cursor: pointer;
      opacity: 0.8;
    }
`

export default props => <Button>{props.children}</Button>
