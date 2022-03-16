import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../App.css";

const Appnav = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Hospital</Nav.Link>
        <Nav.Link href="#pricing">Person</Nav.Link>
        <Nav.Link href="#login">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Appnav;
