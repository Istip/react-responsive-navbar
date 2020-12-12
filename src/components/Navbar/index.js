import React, { useState } from "react"
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink,
  NavMenu,
  MobileMenu,
} from "./NavbarElements"

const Navbar = () => {
  const [menu, showMenu] = useState(false)

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars onClick={() => showMenu(!menu)} />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavBtn>
            <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
      {menu && (
        <MobileMenu>
          <h1>
            <a href='/'>About</a>
          </h1>
          <h1>
            <a href='/'>Services</a>
          </h1>
          <h1>
            <a href='/'>Contact Us</a>
          </h1>
          <h1>
            <a href='/'>Sign Up</a>
          </h1>
          <h1>
            <a href='/'>Sign In</a>
          </h1>
        </MobileMenu>
      )}
    </>
  )
}

export default Navbar
