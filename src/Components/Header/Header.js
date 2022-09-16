import React from "react";
import { Navbar, Nav, Form, FormControl, Button,Card } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">3J Coder</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#jahirul">Jahirul</Nav.Link>
          <Nav.Link href="#joyokim">Johokim</Nav.Link>
          <Nav.Link href="#jeanette">Jeanette</Nav.Link>
          
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