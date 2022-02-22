import React from "react";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
  <body className="font-link">
    <header>
    <Navbar collapseOnSelect expand="lg" className="nav-login">
      <Navbar.Brand href="#home" >
      <h1>
        Swap Buddy
      </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#messages" className="link">Messages</Nav.Link>
          <Nav.Link href="#login" className="link">Login</Nav.Link>
          <Nav.Link href="#signup" className="link">Sign-up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <nav>
      <Navbar collapseOnSelect expand="lg" className="nav-search">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-bar-btn"> <h5>All Categories</h5> </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto dropdown-menu">
          <Nav.Link href="#messages" className="link">Category</Nav.Link>
          <Nav.Link href="#login" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
          <Nav.Link href="#signup" className="link">Category</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home" >
      
      </Navbar.Brand>
    </Navbar>
    </nav>
  </body>
  );
}
