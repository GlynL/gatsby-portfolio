import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  padding: 0.5rem;
`

const StyledDiv = styled.div`
  margin-left: auto;
`

const Scroll = styled.a`
  padding: 0 0.5rem;
  text-decoration: none;
  color: inherit;
  font-size: 1.1rem;
  -webkit-text-stroke: 0.1px white;
`

const Header = ({ scrollToSection }) => (
  <Nav>
    <Scroll onClick={scrollToSection}>Glyn</Scroll>
    <Scroll onClick={scrollToSection}>Skills</Scroll>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
