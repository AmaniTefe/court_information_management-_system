// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavigationButtons />
    </nav>
  );
}

function NavigationButtons() {
  return (
    <>
      <NavLink to="/" className="nav-link" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/login" className="nav-link" activeClassName="active">
        Login
      </NavLink>
    </>
  );
}
