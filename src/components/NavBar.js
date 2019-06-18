import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/store">Store</NavLink>
      <NavLink to="/summon">Summon</NavLink>
    </div>
  )
}

export default NavBar;
