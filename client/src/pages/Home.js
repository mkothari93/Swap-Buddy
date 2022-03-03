import React from "react";
import PostList from "../components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.getAllPosts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();

  if (loggedIn) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {loading ? (
            <div style={{ color: "white" }}>Loading...</div>
          ) : (
            <PostList posts={posts} />
          )}
        </div>
      </div>
    );
  } else
    return (
      <main className="d-flex flex-wrap justify-content-around m-3">
        <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
          <Card id="card">
            <Card.Img variant="top" src="client/src/Images/Camera.jpeg" />
            <Card.Body>
              <Card.Title>Camera</Card.Title>
              <Card.Text>In mint condition</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Posted on March 2, 2022 at 10:00am
              </ListGroupItem>
              <ListGroupItem>Chicago, IL</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </main>
    );
};

export default Home;
