import React from 'react';

import Cart from '../../atoms/Cart/Cart';
import Logo from '../../atoms/Logo/Logo'
import Profile from '../../atoms/Profile/Profile';
import Search from '../../atoms/Search/Search';

import './Navbar.css'

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
    <div>
      {children}
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="top-navbar">
      <NavbarLeft>
        <Logo />
      </NavbarLeft>
      <NavbarCenter>
        <nav className="navbar-links">
          <ul>
            <li>Home</li>
            <li className="strikethrough">Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </NavbarCenter>
      <NavbarRight>
        <Search />
        <Profile />
        <Cart />
      </NavbarRight>
    </div>
  )
}

export default Navbar;