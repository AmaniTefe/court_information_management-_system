import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../image/Logo/logo.png";
import "../style/style.scss";

export default function MainNavbar() {
  return (
    <nav>
      <NavigationButtons />
    </nav>
  );
}

function NavigationButtons() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#393E46" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
              alt="Logo"
            />
            <span style={{ color: "#fff" }}>
              Court Information Management System
            </span>
          </Navbar.Brand>
          <ul className="navbar__links navbar_links_active">
            <Nav className="me-auto">
              <Nav.Link className="home-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="about-link" as={Link} to="/about">
                About
              </Nav.Link>
              <div className="navbar__buttons navbar__buttons__sign-in navbar__buttons__sign-in_hover">
                <Nav.Link as={Link} to="/logIn" style={{}}>
                  Login
                </Nav.Link>
              </div>
            </Nav>
          </ul>
        </Container>
      </Navbar>
    </>
  );
}
