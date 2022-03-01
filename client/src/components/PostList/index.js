import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{post.postTitle}</Card.Title>
                <Card.Text>{post.postText}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {post.username}
                  post on {post.createdAt}
                </ListGroupItem>
                <ListGroupItem>{post.location}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default PostList;
