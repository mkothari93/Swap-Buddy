import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    // <div className="App">
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#FADE82" }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            style={{ background: "#FADE82", fontSize: "50px" }}
            to="/"
          >
            Swap Buddy
          </Link>

          <nav className="text-center">
            {Auth.loggedIn() ? (
              <div className="d-flex flex-wrap">
                <div className="m-4" style={{fontSize:"18px"}}>
                  <Link to="/userpage">My Account</Link>
                </div>
                <div className="m-4" style={{fontSize:"18px"}}>
                  <Link to="/createpost">Create A Post</Link>
                </div>{" "}
                <div className="m-4" style={{fontSize:"18px"}}>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-wrap">
                <div className="m-4" style={{fontSize:"18px"}}>
                  <Link to="/login">Login</Link>
                </div>
                <div className="m-4" style={{fontSize:"18px"}}>
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      </nav>
      {/* <nav id="categorynav" className="pt-4">
        <Navbar collapseOnSelect expand="xxxl" className="nav-search">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-bar-btn"
          >
            {" "}
            <h5>All Categories</h5>{" "}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto dropdown-menu">
              <Nav.Link href="#messages" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#login" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
              <Nav.Link href="#signup" className="link">
                Category
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home"></Navbar.Brand>
        </Navbar>
      </nav> */}
    </div>
  );
};

export default Header;
