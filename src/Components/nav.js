import { Button } from "react-bootstrap";
import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../App.css";

const Appnav = () => {
  return (
    
    <Navbar bg="primary" variant="dark">
      <Nav className="me-auto">
        <Nav.Link href="#home" className="nav">Home</Nav.Link>
        <Nav.Link href="#resource">Resource</Nav.Link>
        <Nav.Link href="#hospital">Hospital</Nav.Link>
        <Nav.Link href="#pricing">Person</Nav.Link>
      </Nav>
      <Button href="#login" variant="light" className="button">Login</Button>
    </Navbar>
    
  );
};

export default Appnav;
