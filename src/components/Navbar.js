import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../image/Logo/logo.png";
import "../style/style.scss";
import "../style/style.css";

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
      <Navbar style={{ backgroundColor: "#fff" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
              alt="Logo"
            />
            <span style={{ color: "black" }}>
              Court Information Management System
            </span>
          </Navbar.Brand>
          <Nav className="me-auto-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <div className="navbar__buttons navbar__buttons__sign-in">
              <Nav.Link as={Link} to="/logIn" style={{}}>
                Login
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
