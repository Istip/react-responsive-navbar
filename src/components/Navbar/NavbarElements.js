import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  z-index: 10;

  &.active {
    background: transparent;
  }
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #15cdfc;
  transition: ease-in-out 0.2s;

  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const MobileMenu = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0;

  & h1 {
    margin: 0 auto;
  }

  & a {
    display: block;
    text-decoration: none;
    color: #fff;
    transition: all 0.2s ease-in-out;
    padding: 0 5rem;

    &:hover {
      color: #15cdfc;
    }
  }
`
