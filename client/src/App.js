import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              Swap Buddy
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
        <nav id="categorynav">
        <Navbar collapseOnSelect expand="xxxl" className="nav-search" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-bar-btn"> <h5>All Categories</h5> </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
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
        <div className="auth-wrapper">
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
         </div>
      </div>
    </Router>


     );
}

export default App;
