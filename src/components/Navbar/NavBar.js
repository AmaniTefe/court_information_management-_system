import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Logo</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
