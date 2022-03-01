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
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Swap Buddy
          </Link>

          {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div> */}

          <nav className="text-center">
            {Auth.loggedIn() ? (
              <>
              <p><Link to="/profile">Me</Link></p>
                
                <p>
                <a href="/" onClick={logout}>
                  Logout
                </a>
                </p>
              </>
            ) : (
              <>
              <p>
                <Link to="/login">Login</Link></p>
                <p>
                <Link to="/signup">Signup</Link></p>
              </>
            )}
          </nav>
        </div>
      </nav>
      {/* <nav id="categorynav">
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
