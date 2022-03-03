import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { DELETE_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";

const UserPostList = ({ posts, postId }) => {
  const { username: userParam } = useParams();
  const [deletePost] = useMutation(DELETE_POST);
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.getUser || data?.me || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/userpage" />;
  }

  const handleDeletePost = async (id) => {
    try {
      await deletePost({
        variables: {id}
      })
      console.log(id);
    } catch (error) {
      console.error(error)
    }
    window.location.reload()
  };

  if (!posts.length) {
    return <h3 style={{ color: "white" }} className="text-center m-5">No Posts Yet...</h3>;
  }

  return (
    <main className="d-flex flex-wrap justify-content-around m-3">
      {posts &&
        posts.map((post) => (
          <div
            className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3"
            key={post._id}
          >
            <Card id="card">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{post.postTitle}</Card.Title>
                <Card.Text>{post.postText}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Posted on: {post.createdAt}</ListGroupItem>
                <ListGroupItem>{post.postLocation}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="btn btn-primary btn-block" onClick={() => handleDeletePost(post._id)}>
                  Delete Post
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </main>
  );
};

export default UserPostList;
