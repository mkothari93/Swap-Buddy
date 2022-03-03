import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";

const SinglePost = (props) => {
  const { id: postId } = useParams();
  console.log(postId);

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.getPost || {};

  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  return (
    <div>
      <div
        className="card m-5"
        style={{
          border: "2px solid black",
          borderRadius: "25px",
        }}
      >
        <p
          className="card-header text-center"
          style={{
            fontWeight: 700,
            fontSize: "40px",
            borderBottom: "1px solid black",
          }}
        >
          {post.postTitle}
        </p>
        <div className="card-body">
          <div style={{ borderBottom: "1px solid black" }}>
            <p style={{ fontSize: "20px" }}>{post.postText}</p>
          </div>
          <br></br>
          <p className="text-center">
            <span style={{ fontWeight: 700 }} className="text-dark text-center">
              {post.username}
            </span>{" "}
            posted on {post.createdAt}
          </p>
          <p className="text-center">{post.postLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
