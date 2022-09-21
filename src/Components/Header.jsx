import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navBar">
        <Container>
          <Navbar.Brand href="#home">3J Coder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="nav-link">About</Link></Nav.Link>
              <Nav.Link><Link to="/products" className="nav-link">Courses</Link></Nav.Link>
              <Nav.Link><Link to="/register" className="nav-link">Registration</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
