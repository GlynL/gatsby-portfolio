import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Button from "./Button"

const NavButton = styled(Button)`
  margin-bottom: 0.5rem;
  background: none;
`

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  padding: 0.5rem;
`

const RightNav = styled.div`
  margin-left: auto;
  padding-right: 2rem;

  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-end;
  }
`

const Scroll = styled.a`
  padding: 0 0.5rem;
  text-decoration: none;
  color: inherit;
  font-size: 1.1rem;
  -webkit-text-stroke: 0.1px white;

  @media screen and (max-width: 800px) {
    margin-bottom: 0.5rem;
  }
`

const HamburgerLine = styled.div`
  width: 20px;
  height: 3px;
  background-color: black;
  margin: 4px 0;
`

const HamDiv = styled.div`
  transition: 0.2s all;
  transform: ${props => (props.rotated ? "rotate(90deg)" : "")};
`

const Hamburger = ({ collapsed }) => (
  <HamDiv rotated={!collapsed}>
    <HamburgerLine />
    <HamburgerLine />
    <HamburgerLine />
  </HamDiv>
)

const Header = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobile, setMobile] = useState(false)
  function windowResized() {
    if (window.innerWidth <= 800) {
      setMobile(true)
      setCollapsed(true)
    } else {
      setMobile(false)
      setCollapsed(false)
    }
  }
  useEffect(() => {
    // trigger once on load & add listener for any resizing
    windowResized()
    window.addEventListener("resize", windowResized)
    return () => window.removeEventListener("resize", windowResized)
  }, [])

  // set display depending on mobile/collapsed
  let rightNav
  if (mobile) {
    if (collapsed) {
      rightNav = (
        <RightNav>
          <NavButton onClick={() => setCollapsed(!collapsed)}>
            <Hamburger collapsed={collapsed} />
          </NavButton>
        </RightNav>
      )
    } else {
      rightNav = (
        <RightNav>
          <NavButton onClick={() => setCollapsed(!collapsed)}>
            <Hamburger collapsed={collapsed} />
          </NavButton>
          <Scroll href="#skills">Skills</Scroll>
          <Scroll href="#projects">Projects</Scroll>
          <Scroll href="#blog">Blog</Scroll>
          <Scroll href="#contact">Contact</Scroll>
        </RightNav>
      )
    }
  } else {
    rightNav = (
      <RightNav>
        <Scroll href="#skills">Skills</Scroll>
        <Scroll href="#projects">Projects</Scroll>
        <Scroll href="#blog">Blog</Scroll>
        <Scroll href="#contact">Contact</Scroll>
      </RightNav>
    )
  }

  return (
    <Nav>
      <Scroll href="#home">Glyn</Scroll>
      {rightNav}
    </Nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
