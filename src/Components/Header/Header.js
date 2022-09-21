import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">3J Coder</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/Home">
            Home
          </Link>
          <Link className="nav-link" to="/Store">
            Store
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <br />
    </div>
  );
};

export default Header;
