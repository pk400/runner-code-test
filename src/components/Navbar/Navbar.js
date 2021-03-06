import React, { useEffect, useState } from 'react';

import Cart from '../../atoms/Cart/Cart';
import Logo from '../../atoms/Logo/Logo'
import Profile from '../../atoms/Profile/Profile';
import Search from '../../atoms/Search/Search';

import { isMobile } from '../../utils/responsive';

import './Navbar.css'

const NavbarBurgerMenu = ({children}) => {
  return (
    <div>
      <img
        src="/images/iconMenu.svg"
        alt="Navigation drop-down menu"
        style={{
          cursor: "pointer"
        }} />
    </div>
  )
}

const NavbarLeft = ({children}) => {
  return (
    <div className="navbar-left">
      {children}
    </div>
  )
}

const NavbarCenter = ({children}) => {
  return (
    <div className="navbar-center">
      {children}
    </div>
  )
}

const NavbarRight = ({children}) => {
  return (
    <div className="navbar-right">
      {children}
    </div>
  )
}

const Navbar = () => {
  const [isMobileView, setisMobileView] = useState(isMobile())
  useEffect(() =>
    window.addEventListener('resize', () => setisMobileView(isMobile())), [])
  const links = (
    <nav className="navbar-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li className="strikethrough"><a href="/">Shop</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
  return (
    <div className="top-navbar">
      {isMobileView &&
        <NavbarBurgerMenu>
          {links}
        </NavbarBurgerMenu>}
      <NavbarLeft>
        <Logo />
      </NavbarLeft>
      {!isMobileView &&
        <NavbarCenter>
          {links}
        </NavbarCenter>}
      <NavbarRight>
        {!isMobileView && <Search />}
        {!isMobileView && <Profile />}
        <Cart />
      </NavbarRight>
    </div>
  )
}

export default Navbar;
