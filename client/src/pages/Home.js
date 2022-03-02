import React from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

import {
  Nav,
  Navbar,
  NavDropdown,
  Card,
  ListGroup,
  ListGroupItem,
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
      <main>
        <div className="row">
          <div className="flex-row justify-space-between">
            {/* {loggedIn && (
              <div className="col-12 mb-3">
                <PostForm />
              </div>
            )} */}
            <div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList posts={posts} title="Items for trade..." />
              )}
            </div>
          </div>
        </div>
      </main>
    );
  } else
    return (
      //PreMade Cards if user is not logged in
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Camera</Card.Title>
          <Card.Text>In new condition</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>posted by Monika</ListGroupItem>
          <ListGroupItem>IL</ListGroupItem>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link>
            <Link to={`/post/${post._id}`}>
                View Details
            </Link>
          </Card.Link>
          <Card.Link href="#">Contact {post.username}</Card.Link>
          </Card.Body> */}
      </Card>
    );
};

export default Home;
