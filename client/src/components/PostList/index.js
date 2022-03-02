import React from "react";
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
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3 style={{ color: "white" }}>No Posts Yet...</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          // <Container>
          //   <Row>
              <div className="box" key={post._id}>
                <Card className="m-3" id="card">
                  <Card.Img
                    variant="top"
                    src="holder.js/100px180?text=Image cap"
                  />
                  <Card.Body>
                    <Card.Title>{post.postTitle}</Card.Title>
                    <Card.Text>{post.postText}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      {post.username} posted on {post.createdAt}
                    </ListGroupItem>
                    <ListGroupItem>{post.postLocation}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link>
                      <Link to={`/post/${post._id}`}>View Details</Link>
                    </Card.Link>
                    <Card.Link href="#">Contact {post.username}</Card.Link>
                  </Card.Body>
                </Card>
              </div>
          //   </Row>
          // </Container>
        ))}
    </div>
  );
};

export default PostList;
