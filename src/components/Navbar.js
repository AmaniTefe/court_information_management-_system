import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../image/Logo/logo.png";
//import "../style/style.scss";
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
              alt="Logo"
            />
            Court Information Management System
          </Navbar.Brand>
          <Nav className="me-auto-right">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
